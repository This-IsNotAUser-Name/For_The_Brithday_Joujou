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

      const againBtn = document.createElement("button");
      againBtn.className = "btn btn-secondary";
      againBtn.textContent = "Read it again";
      againBtn.addEventListener("click", () => {
        stepCount = 0;
        renderScene(INTRO.startScene);
      });

      choicesContainer.appendChild(againBtn);
      spawnHearts();
    } else {
      // One button per choice. One choice = a simple "Continue".
      // Two choices = the story branches here.
      scene.choices.forEach((choice) => {
        const btn = document.createElement("button");
        btn.className = "btn btn-choice";
        btn.textContent = choice.label;
        btn.addEventListener("click", () => renderScene(choice.next));
        choicesContainer.appendChild(btn);
      });
    }

    postcard.classList.remove("turning");
  }, 320);
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
