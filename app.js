// ================================================================
//  This file makes the page work. You shouldn't need to edit
//  anything here — go write your story in story.js instead.
// ================================================================

// ---- Grab the page elements we'll be updating ----
const introScreen = document.getElementById("intro-screen");
const adventureScreen = document.getElementById("adventure-screen");
const startBtn = document.getElementById("start-btn");
const postcard = document.getElementById("postcard");
const postmark = document.getElementById("postmark");
const sceneImage = document.getElementById("scene-image");
const sceneCaption = document.getElementById("scene-caption");
const sceneText = document.getElementById("scene-text");
const choicesContainer = document.getElementById("choices");

let stepCount = 0;
let pathTaken = []; // labels of real branch choices she picked, in order

// ---- Fill in the intro screen from story.js's INTRO object ----
document.getElementById("intro-title").textContent = INTRO.title;
document.getElementById("intro-message").textContent = INTRO.message;
startBtn.textContent = INTRO.buttonLabel;

// ---- Scatter some twinkling stars behind the intro screen ----
function createStars(count) {
  const starsContainer = document.getElementById("stars");
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = (Math.random() * 2 + 1).toFixed(1);
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    star.style.animationDuration = (3 + Math.random() * 3).toFixed(2) + "s";
    starsContainer.appendChild(star);
  }
}
createStars(90);

// ---- Move from the intro screen into the adventure ----
startBtn.addEventListener("click", () => {
  introScreen.classList.add("fade-out");
  setTimeout(() => {
    introScreen.classList.add("hidden");
    adventureScreen.classList.remove("hidden");
    renderScene(INTRO.startScene);
    requestAnimationFrame(() => adventureScreen.classList.add("visible"));
  }, 500);
});

// ---- Render a single scene onto the postcard ----
function renderScene(key) {
  const scene = STORY[key];

  if (!scene) {
    // This means a "next" in story.js points to a scene name
    // that doesn't exist — check the spelling in story.js.
    sceneText.textContent =
      'Story error: no scene named "' + key + '" was found in story.js. ' +
      "Double check that the \"next\" value matches a scene name exactly.";
    choicesContainer.innerHTML = "";
    return;
  }

  stepCount++;
  postmark.textContent = String(stepCount).padStart(2, "0");

  // Fade the postcard out, swap the content in, fade it back in.
  postcard.classList.add("turning");

  setTimeout(() => {
    sceneImage.src = scene.image;
    sceneImage.alt = scene.caption || "";
    sceneText.textContent = scene.text;

    if (scene.caption) {
      sceneCaption.textContent = scene.caption;
      sceneCaption.classList.remove("hidden");
    } else {
      sceneCaption.textContent = "";
      sceneCaption.classList.add("hidden");
    }

    choicesContainer.innerHTML = "";
    postcard.classList.remove("ending");

    if (scene.choices.length === 0) {
      // This scene is an ending.
      postcard.classList.add("ending");

      const certBtn = document.createElement("button");
      certBtn.className = "btn btn-certificate";
      certBtn.textContent = "Download Certificate";
      certBtn.addEventListener("click", generateCertificate);
      choicesContainer.appendChild(certBtn);

      const againBtn = document.createElement("button");
      againBtn.className = "btn btn-secondary";
      againBtn.textContent = "Read it again";
      againBtn.addEventListener("click", () => {
        stepCount = 0;
        pathTaken = [];
        renderScene(INTRO.startScene);
      });

      choicesContainer.appendChild(againBtn);
      spawnHearts();
    } else {
      // One button per choice. One choice = a simple "Continue".
      // Two choices = the story branches here — record her pick.
      scene.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-choice";
        btn.textContent = choice.label;
        btn.addEventListener("click", () => {
          if (scene.choices.length > 1) {
            pathTaken.push(choice.label);
          }
          renderScene(choice.next);
        });
        choicesContainer.appendChild(btn);
      });
    }

    postcard.classList.remove("turning");
  }, 320);
}

// ---- Draw wrapped, centered text on a canvas; returns the y position ----
// after the last line, so the caller knows where to continue drawing.
function drawWrappedCenteredText(ctx, text, centerX, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const testLine = line ? line + " " + word : word;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, centerX, y + i * lineHeight));
  return y + lines.length * lineHeight;
}

// ---- Build and download the certificate image ----
async function generateCertificate() {
  // Wait for the custom fonts to be ready so the canvas draws them
  // correctly instead of falling back to a default font.
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready;
  }

  const canvas = document.createElement("canvas");
  canvas.width = 1000;
  canvas.height = 700;
  const ctx = canvas.getContext("2d");

  // Background + double border
  ctx.fillStyle = "#F6EFE1";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#C9A24B";
  ctx.lineWidth = 2;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
  ctx.strokeRect(42, 42, canvas.width - 84, canvas.height - 84);

  ctx.textAlign = "center";

  ctx.fillStyle = "#2F6F6A";
  ctx.font = "13px 'Space Mono'";
  ctx.fillText("ISSUED UPON COMPLETION OF THE JOURNEY", canvas.width / 2, 90);

  ctx.fillStyle = "#1B2A4A";
  ctx.font = "600 44px 'Fraunces'";
  ctx.fillText(CERTIFICATE.title, canvas.width / 2, 150);

  ctx.fillStyle = "#2B2320";
  ctx.font = "17px 'Karla'";
  ctx.fillText(CERTIFICATE.recipientLabel, canvas.width / 2, 210);

  ctx.fillStyle = "#D66B7D";
  ctx.font = "600 38px 'Fraunces'";
  ctx.fillText(CERTIFICATE.recipientName, canvas.width / 2, 260);

  ctx.fillStyle = "#2B2320";
  ctx.font = "16px 'Karla'";
  let nextY = drawWrappedCenteredText(ctx, CERTIFICATE.closing, canvas.width / 2, 310, 720, 24);

  if (pathTaken.length > 0) {
    nextY += 34;
    ctx.fillStyle = "#2F6F6A";
    ctx.font = "bold 13px 'Space Mono'";
    ctx.fillText("HER PATH", canvas.width / 2, nextY);
    nextY += 26;
    ctx.fillStyle = "#2B2320";
    ctx.font = "italic 16px 'Karla'";
    nextY = drawWrappedCenteredText(ctx, pathTaken.join("   →   "), canvas.width / 2, nextY, 780, 24);
  }

  // Date (bottom left) + signature (bottom right)
  const dateStr = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  ctx.strokeStyle = "#2B2320";
  ctx.lineWidth = 1;
  ctx.textAlign = "left";
  ctx.beginPath(); ctx.moveTo(90, canvas.height - 95); ctx.lineTo(280, canvas.height - 95); ctx.stroke();
  ctx.fillStyle = "#2B2320";
  ctx.font = "14px 'Space Mono'";
  ctx.fillText(dateStr, 90, canvas.height - 105);
  ctx.font = "11px 'Karla'";
  ctx.fillText("DATE", 90, canvas.height - 78);

  ctx.textAlign = "right";
  ctx.beginPath(); ctx.moveTo(canvas.width - 280, canvas.height - 95); ctx.lineTo(canvas.width - 90, canvas.height - 95); ctx.stroke();
  ctx.font = "italic 18px 'Fraunces'";
  ctx.fillText(CERTIFICATE.signature, canvas.width - 90, canvas.height - 105);
  ctx.font = "11px 'Karla'";
  ctx.fillText("SIGNED", canvas.width - 90, canvas.height - 78);

  // Trigger the download
  const link = document.createElement("a");
  link.download = "certificate.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

// ---- A small heart burst, used once the story reaches an ending ----
function spawnHearts() {
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "♥";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDelay = (Math.random() * 0.5).toFixed(2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}
