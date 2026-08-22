// ================================================================
//   YOUR STORY LIVES IN THIS FILE.
//   This is the ONLY file you should need to edit.
//   Everything else (app.js, style.css) just makes it run and
//   look nice — you don't need to touch it.
// ================================================================


// ----------------------------------------------------------------
// PART 1 — THE OPENING SCREEN
// The very first thing she sees, before the adventure starts.
// ----------------------------------------------------------------
const INTRO = {
  title: "Happy Birthday, My Love!",
  message: "I made you something. Press the button below whenever you're ready — it's a little adventure, made just for you.",
  buttonLabel: "Start the Adventure",

  // This must match the key of the FIRST scene down in STORY below.
  startScene: "start"
};


// ----------------------------------------------------------------
// PART 2 — THE ADVENTURE ITSELF
//
// The story is made of "scenes". Each scene is one postcard: a
// photo, some text, and one or two choices.
//
// HOW TO WRITE A SCENE
// ---------------------
//   my_scene_name: {
//     image:   "images/my-photo.jpg",   <- a photo in the images/ folder
//     caption: "Optional little caption under the photo (or \"\")",
//     text:    "The story text for this moment.",
//     choices: [
//       { label: "Continue", next: "next_scene_name" }
//     ]
//   },
//
// RULES OF THUMB
// ---------------
//  - Every scene needs a unique name (the part before the colon).
//    Use only letters, numbers, and underscores — no spaces.
//  - "choices" with ONE entry = a simple "Continue" button.
//  - "choices" with TWO entries = the story branches into two
//    different paths. Give each one a clear label, like
//    "Explore the city" vs "Stay in and cook together".
//  - "next" must exactly match the name of another scene below.
//  - A scene with an EMPTY choices list, choices: [], is an
//    ENDING. The story stops there and she gets a
//    "Read it again" button.
//  - You can have as many scenes, branches, and endings as you
//    like — just keep giving each one a unique name and make
//    sure every "next" points somewhere that actually exists.
//
// This file comes pre-loaded with a small 2-branch example story
// and matching placeholder photos, so you can see how it works
// and preview it immediately. Replace the text and photos with
// your own, then add more scenes the same way.
// ----------------------------------------------------------------

// ----------------------------------------------------------------
// PART 3 — THE CERTIFICATE
// Shown as a "Download Certificate" button on every ending. It's
// a downloadable image summarizing which branch choices she made.
// ----------------------------------------------------------------
const CERTIFICATE = {
  title: "Certificate of Adventure",
  recipientLabel: "This certifies that",
  recipientName: "You",
  closing: "bravely chose every step of this journey, and made it to the end.",
  signature: "With love, always"
};


const STORY = {

  start: {
    image: "images/start.jpg",
    caption: "",
    text: "It's your birthday, and somewhere across the distance between us, I wanted to bring you something more than a message. So — welcome to your adventure. Every choice you make here is one I'd make with you, if I could be there.",
    choices: [
      { label: "Continue", next: "memory_lane" }
    ]
  },

  memory_lane: {
    image: "images/memory-lane.jpg",
    caption: "a memory, for no particular reason",
    text: "Replace this with a real memory of yours — a trip, an inside joke, the first time you knew. Whatever photo and story you want her to land on here.",
    choices: [
      { label: "Continue", next: "choice_point" }
    ]
  },

  choice_point: {
    image: "images/choice-point.jpg",
    caption: "",
    text: "Two paths open up from here. Which one calls to you?",
    choices: [
      { label: "Chase the adventure", next: "adventure_1" },
      { label: "Stay somewhere cozy", next: "cozy_1" }
    ]
  },

  // ---- Branch A: "adventure" ----
  adventure_1: {
    image: "images/adventure-1.jpg",
    caption: "",
    text: "You picked adventure. Fill this in with something bold and fun you'd want to imagine doing together.",
    choices: [
      { label: "Continue", next: "adventure_ending" }
    ]
  },

  adventure_ending: {
    image: "images/adventure-ending.jpg",
    caption: "The End — for now",
    text: "This is where the adventure path ends. Write something sweet to close it out. Whatever ending you write, know it's true: I can't wait for the next one, wherever it is.",
    choices: []
  },

  // ---- Branch B: "cozy" ----
  cozy_1: {
    image: "images/cozy-1.jpg",
    caption: "",
    text: "You picked cozy. Fill this in with a quiet, warm scene you'd want to imagine together.",
    choices: [
      { label: "Continue", next: "cozy_ending" }
    ]
  },

  cozy_ending: {
    image: "images/cozy-ending.jpg",
    caption: "The End — for now",
    text: "This is where the cozy path ends. Write your own closing words here. However this story ends, happy birthday — I love you.",
    choices: []
  }

};
