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
  title: "Happy Birthday Mon Cœur!",
  message: "I made you something. Load this page on you laptop and press the button below whenever you're ready. It's a little adventure, made just for you.",
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
  title: "Certificate of Boubou's Adventure Completion",
  recipientLabel: "This certifies that",
  recipientName: "Emma (G.P. Joujou) Terpereau",
  closing: "bravely chose every step of this journey, and made it to the end.",
  signature: "With heaps and heaps of love, Sorosh"
};


const STORY = {

  start: {
    image: "images/image1.jpg",
    caption: "Happy birthday!",
    text: "It's your birthday, and somewhere across the distance between us, I wanted to bring you something more than a message. So welcome to your adventure! Every choice you make here is one I'd make with you, if I could be there.",
    choices: [
      { label: "Continue", next: "wake_up" }
    ]
  },

  wake_up: {
    image: "images/image2.jpg",
    caption: "The birthday morning",
    text: "Today is the day of your 26'th birtday. You open your eyes in our bed, in our cozy apartment, and strech your cute body. I've been on my computer, waiting for my joujou to wake up. (Happy birthday Joujou) I say. (I want you to know that I feel extremely lucky to be by your side for this special day, and to be able to celeberate it with you). ",
    choices: [
      { label: "Continue", next: "choice_point" }
    ]
  },

  choice_point: {
    image: "images/image3.jpg",
    caption: "",
    text: "(So, what kind of birthday morning do you wish to have my queen ?) I ask. You hesitate. On the one hand, we could say in bed, cuddle, feel each other's warmth and tenderness, and go down the cozy road. We could, also, go out and explore our small town togehter. While it doesn't have much of anything new to offer, it is always nice to have a stroll outside.",
    choices: [
      { label: "Let's go out for a stroll!", next: "adventure_1" },
      { label: "Let's stay in bed!", next: "cozy_1" }
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
    image: "images/image4.jpg",
    caption: "The happiest, coziest couple",
    text: "(Let's stay in bed) you say. (Wise choice my love, I'm here to make your wishes come true). So in bed we stay. You turn your back, I hug you from behind, give you butterfly kisses and caress your hair. It is truly a wonderful morning, and we cherish it together.",
    choices: [
      { label: "Continue", next: "cozy_choices" }
    ]
  },

  cozy_choices: {
    image: "images/image5.jpg",
    caption: "Tough choices",
    text: "We keep cuddling. The kissing, the tender touche, the love... it is magical. The lucky man that I am who gets the privilege of experiencing your love, ask: (Say my Joujou, are you hungry yet? I have planed something for you which I could go and prepare. I would not want to get out of our bed and stop living this intimate and beautiful moment just yet if you're not hungry, the breakfast could easily be transformed to a brunch!) ",
    choices: [
      { label: "I want to stay in bed together!", next: "cozy_bed" },
      { label: "It would be nice to eat!", next: "cozy_breakfast" }
    ]
  },

  cozy_bed: {
    image: "images/image6.jpg",
    caption: "The sweetest feeling in the world",
    text: "(I want more of this) you say. We stay in bed. I pull you closer, kiss your beautiful lips, and caress your warm and soft skin. You wrap your arms around my fuzzy back, and pull me towards yourself. We indulge ourselves in the sweet expression of love, and then cuddle some more. I can feel your warmth all along my body, which warms me from the inside. As you're in my arms, your eyelids start to get heavier; and you fall sleep to a little nap. ",
    choices: [
      { label: "Continue", next: "sweat_dreams" }
    ]
  },

  sweat_dreams: {
    image: "images/image7.jpg",
    caption: "The most beautiful sleepy girl in the world",
    text: "Your nap gets sounder and deeper by the second. Soon, as your wonderful physical body lays in my arms, your beautiful mind is traveling far from our bed. You see yourself flying in the sky, where a couple of birds come and salute you. As you get closer to the ground, you see yourself approaching the doorway of our appartment. You look back, I am standing right behind you, smiling and holding our backpacks. You smile at me, turn back again, open the door and step outside, I follow you.",
    choices: [
      { label: "Continue", next: "adventure_1" }
    ]
  },

  cozy_breakfast: {
    image: "images/image8.jpg",
    caption: "Phone Boubou",
    text: "(What do your heart and tummy desire ?) I ask. You take a second, you hesitate. (Whatever you want 🥺) you say softly. (I know just the thing for us my love) I say, and start cooking. You browse your phone, as you hear some noises from the kitchen and smell some sweet oders.",
    choices: [
      { label: "Continue", next: "pancakes" }
    ]
  },

  pancakes: {
    image: "images/image9.jpg",
    caption: "Pancake man",
    text: "Deep into your internet exploration, you think to yourself: (I'm actually getting hungry, what's happening there). Suddenly you hear: (Breakfast is ready your highness)! You look up from your phone to see me with two BIG plates of banana and peanut butter pancakes. (I though that you might enjoy our signature pancakes, it's been a while). We dig into your birthday pancakes.",
    choices: [
      { label: "Continue", next: "working_girl" }
    ]
  },

  working_girl: {
    image: "images/image10.jpg",
    caption: "Working girl 👩🏻‍💻",
    text: "After ravishing those pancakes, you say: (Sorry baby, I have to work for a few minutes. I've got some mails that I have to answer. Would that be okay)? (Of course Joujou, I know that people depend on you at your job). You start answering those mails, I lay on my side and hug your but as you work.",
    choices: [
      { label: "Continue", next: "sus_link" }
    ]
  },

  sus_link: {
    image: "images/image11.jpg",
    caption: "The link does look suspicious!",
    text: "As you're working away on your computer, you notice a strage mail from Nina. The mail simply states: (Girl you better check this out omg lol). Underneeth that text, there's a bizzare link. You think to yourself: (Is that really Nina? If it really is her, she wouln't send me a computer virus. Unless she has been hacked ...) The choice is tough, but a decision must be made: do you want to click on that link?",
    choices: [
      { label: "I'm sure it's safe! Click away!", next: "bridge_to_adventure_1" },
      { label: "Yeah I'm not gonna risk it.", next: "play_cards" }
    ]
  },

bridge_to_adventure_1: {
    image: "images/image12.jpg",
    caption: "Uh oh...",
    text: "You decide to click on the link. Your screen turns black, as if you're computer's dead. All of a sudden, it turns back on into a mesmerizing green. You think to yourself: (maybe I shouldn't even be looking), but it is too late. You have been hypnotized! For a few seconds, you don't know where you are anymore, until you find yourself...",
    choices: [
      { label: "Continue", next: "adventure_1" }
    ]
  },

  play_cards: {
    image: "images/image13.jpg",
    caption: "It is crazy how you've always been this pretty 🥰",
    text: "You ignore that mail, and a bunch more which all seem spamy. Ater a little while, you close your laptop. You are done for the day, your collegues have all that is necessary to them, and we can get back to our cozy little day. We cuddle for a few minutes, but the restless little baby that you are (ok that I am 🙄) suggest an activity. (Let's play some cards) I say; and you kindly agree. I make some tea, shuffle the cards, and we start playing.",
    choices: [
      { label: "Continue", next: "" }
    ]
  },

  cozy_ending: {
    image: "images/cozy-ending.jpg",
    caption: "The End — for now",
    text: "This is where the cozy path ends. Write your own closing words here. However this story ends, happy birthday — I love you.",
    choices: []
  }

};
