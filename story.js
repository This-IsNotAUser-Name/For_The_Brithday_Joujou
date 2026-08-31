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
  closing: "bravely chose every step of her birthday journey, and made it to the end.",
  signature: "Tavalodet Mobarak, Sorosh"
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
      { label: "Continue", next: "bike_stroll" }
    ]
  },

bike_stroll: {
    image: "images/image14.jpg",
    caption: "Cuty and the cute bike ",
    text: "We play for about an hour, sipping on tea, listening to music, talking, lauging... It is truly an amazing experience, as has always been the case. At the last round, you say: (let's do something different after this). I ask you what you have in mind. You think for a bit and reply : (We could go on a bike stroll). Music to my ears. (Let's goooo!!) I say. We get ready, get our bikes, and start biking along the river.",
    choices: [
      { label: "Continue", next: "zaa" }
    ]
  },

zaa: {
    image: "images/image15.jpg",
    caption: "I love my baby, my baby loves pizza!",
    text: "After about an hour of pedaling, we stop at our favorite spot. We go and get some pizza, go back to the river side, and enjoy some slices at each other's company. Story aside Joujou, I love you so so so dearly. I miss spending time with you, going on bike strolls, and maybe most of all eating with you. I love you so much I don't even know how to express it properly. Back to the story ❤️🐣❤️.",
    choices: [
      { label: "Continue", next: "friendly_goose" }
    ]
  },

friendly_goose: {
    image: "images/image16.jpg",
    caption: "The gaggle is coming!",
    text: "We finish our pizzas and lay on the grass. You lay your head on my arm, and we're both enjoying our surroundings. I put my hand on your hip and pull myself to your joyful lips. We kiss and we kiss. As I am thinking to myself (This is amazing could this moment be any better), a gaggle of geese approach. We get scared at first. (Hurry, get your bike and let's go!) you say. But they seem to be awfully friendly the geese. (Quack) says one of them, and comes to sit where we were sitting. We look at each other, thinking that it might be the oppoortunity of a lifetime to bond with a goose.",
    choices: [
      { label: "Continue", next: "talking_gaggle" }
    ]
  },

talking_gaggle: {
    image: "images/image17.jpg",
    caption: "Friendly goose and amazing joujou 🐣🪿",
    text: "As the most adventurous member or our duo, you approach the goose first. It says (Salâm!). You look back at me, giggling at the talking gaggle. (Man Ghâzi Ghâz Ghâz hastam; esm é to chié?) says the goose, looking into your deep brown eyes. (Emma, khoshbakhtam Ghâzi Ghâz Ghâz) you respond. (Man mitoonam be shoma dast bezanam ?) you ask fluently. The goose nods its head. You get closer to the Ghâzi and pet it gently. At that moment it hits you. The mushrooms on that pizza must have been a tad magical. Geese usually do not speak Persian, you know ? ",
    choices: [
      { label: "Continue", next: "geesy_choice" }
    ]
  },

geesy_choice: {
    image: "images/image18.jpg",
    caption: "The goose of judgement proposes, the joujou chooses.",
    text: "Ghâzi Ghâz Ghâz recognizes your skepticism. It is not happy. (You don't believe that this is real, I see ?) (I mean, it has been a long time since an animal talked to me). The goose contemplates for a few seconds. (Very well, I get that. If you wish it proven to you that this is in fact real, we can talk this through. A lengthy discussion it might be, but you will understand the truth and the univers and pizza. Alternatively, I could show you instead. We could travel through the realms of your dreams, Boubouland). You think to yourself :(Wasn't the goose Persian like a few seconds ago? I'm pretty sure he was speaking Farsi...)",
    choices: [
      { label: "Let us discover Boubouland, Ghâz Ghâz.", next: "adventure_goose" },
      { label: "I want to debate that goose", next: "the_debate " }
    ]
  },

the_debate: {
    image: "images/image19.jpg",
    caption: "A fierce debate is taking place!",
    text: "You accept the intelectual challange proposed by the avian Persian. You talk about politics, fairies, global warming, watermelon juice, Twilight, and the illusion of free choice. The debate is intense, and you start getting tired. You notice that as the debate gets longer, and as you get more and more tired, the goose is getting progressively bigger. You notive its eye of illuminati. It laughs uncontrollably and says: (Did you really think that you could avoid the adventure? You are born for that girl. Come on). You get dizzy, your vision gets blurry, and you pass out. When you come to, you find yourself saying... ",
    choices: [
      { label: "Continue", next: "adventure_goose" }
    ]
  },

adventure_1: {
    image: "images/image20.jpg",
    caption: "Let's go for the the adventure of a lifetime!",
    text: "(Let's go and explore this little world surrounding us) you say. So we get dressed, open the door of our small home, and step outside. But you feel a bit odd, as if something is off. You can't quiet put your finger on it, but you feed as if this is not the world you have come to know. You sense some malaise, but also an exciting tingling in your gut. Adventure Emma and Boubou get to exploring!",
    choices: [
      { label: "Continue", next: "exit_building" }
    ]
  },

  adventure_goose: {
    image: "images/image21.jpg",
    caption: "Let's go for the the adventure of a lifetime!",
    text: "(Let's go and explore this little world surrounding us) you say. The goose smiles and says (bippity boppity boo!). All three of us are back at our home. So we get dressed, open the door of our small home, and step outside. But you feel a bit odd, as if something is off. Besides all the goose stuff (I'm sorry I don't even know why I added him to all this 🥲) but you feed as if this is not the world you have come to know. You sense some malaise, but also an exciting tingling in your gut. Adventure Emma, Boubou and Ghâz Ghâz get to exploring!",
    choices: [
      { label: "Continue", next: "exit_building_goose" }
    ]
  },

exit_building: {
    image: "images/image22.jpg",
    caption: "The Joujou, the Bouboub and the witch 🧙🏻‍♀️",
    text: "We take the elevator and go to the building's entry. There's the kind which of Compiègne's forest who's getting her mail. She says hello and asks about your grandma. We all exchange pleasantries. She gets going towards the building, and us towards the exit. She turns and tells us: (Be very careful out there. The 26'th birthday adventure comes with its own risks). Strange thing to say, but not too out of character for her.",
    choices: [
      { label: "Continue", next: "the_sea" }
    ]
  },

exit_building_goose: {
    image: "images/image23.jpg",
    caption: "The Joujou, the Bouboub, Ghâz Ghâz and the witch 🧙🏻‍♀️",
    text: "We take the elevator and go to the building's entry. There's the kind which of Compiègne's forest who's getting her mail. She says hello and asks about your grandma. Then she speaks some Parseltongue with the goose of judgement. We all exchange pleasantries. She gets going towards the building, and us towards the exit. She turns and tells us: (Be very careful out there. The 26'th birthday adventure comes with its own risks). Strange thing to say, but not too out of character for her. Nods the Ghâz Ghâz, and off we go",
    choices: [
      { label: "Continue", next: "sea_goose" }
    ]
  },

the_sea: {
    image: "images/image24.jpg",
    caption: "Boubou, Boubou, Boubou, Boubou and the sea",
    text: "In our adventure powered by magic, we start our day by a visit to the sea. Cold and windy as it was we couldn't resist jumping in. The unforgiving weather meant that we were alone, and had all the sea to ourselves. I instantly shouted from the cold, you were laughing joyfully. I hugged you very tightly inside the water, as I was freezing. You walked and swam around a bit, with me attached to your back. We had a long, deep, romantic kiss. As we were alone and tranquile, we didn't hesitate to take it one step further, and further again.",
    choices: [
      { label: "Continue", next: "snow" }
    ]
  },

sea_goose: {
    image: "images/image25.jpg",
    caption: "Boubou, Boubou, Boubou, Boubou, Ghâzi and the sea",
    text: "In our adventure powered by magic, we start our day by a visit to the sea. Cold and windy as it was we couldn't resist jumping in. The unforgiving weather meant that we were alone, and had all the sea to ourselves. We asked the goose for some privacy: (Aya mishé mâ ro tanhâ bézari ?) He shook his head and flew away. I instantly shouted from the cold, you were laughing joyfully. I hugged you very tightly inside the water, as I was freezing. You walked and swam around a bit, with me attached to your back. We had a long, deep, romantic kiss. As we were alone and tranquile, we didn't hesitate to take it one step further, and further again.",
    choices: [
      { label: "Continue", next: "snow_goose" }
    ]
  },

snow: {
    image: "images/image26.jpg",
    caption: "Cutest snow couple",
    text: "Once we're dry, we put on our magical snow suits. We hold each othe's hands, close our eyes, take a deep breath, and voilà. Before you open your soulful eyes, you feel the cold breeze of a snowy day. We are in the middle of a forest covered in snow. We walk, listening to the satisfying noise snow makes under our boots. once we spot a safe pile of snow, we make snow angels. We even through arround a few snow balls. Time flies by, and before we know it, it is time for the next adventure of your birthday.",
    choices: [
      { label: "Continue", next: "snack" }
    ]
  },

snow_goose: {
    image: "images/image27.jpg",
    caption: "Cutest snow couple (and a goose)",
    text: "Once we're dry, we put on our magical snow suits. We hold each othe's hands, close our eyes, take a deep breath, and voilà. Before you open your soulful eyes, you feel the cold breeze of a snowy day. We are in the middle of a forest covered in snow. We walk, listening to the satisfying noise snow makes under our boots. once we spot a safe pile of snow, we make snow angels. We even through arround a few snow balls, where you manage to hit Ghâz Ghâz. The three of us share a laugh, and before we know it, it is time for the next adventure of your birthday.",
    choices: [
      { label: "Continue", next: "snack_goose" }
    ]
  },

snack: {
    image: "images/image28.jpg",
    caption: "🐣❤️🥰😍",
    text: "After the snow chapter, you start to feel a hunger developing in your little tummy. We stop for a snack; where I have taken this photo of you. This is one of my all time favorite photos of you my love. It was the second day we spent at Annecy, during our biking session on the road with the sharp slope. We stopped in front of a garden's door, had some water and snacks, and resumed our journey. I feel extremely lucky to have had the privilage of spending that day and so many more with you. I love you my boubou 😘.",
    choices: [
      { label: "Continue", next: "forest_forest" }
    ]
  },

snack_goose: {
    image: "images/image29.jpg",
    caption: "🐣❤️🥰😍",
    text: "After the snow chapter, you start to feel a hunger developing in your little tummy. We stop for a snack; where I have taken this photo of you. This is one of my all time favorite photos of you my love. It was the second day we spent at Annecy, during our biking session on the road with the sharp slope. We stopped in front of a garden's door, had some water and snacks, and resumed our journey. I feel extremely lucky to have had the privilage of spending that day and so many more with you. I love you my boubou 😘.",
    choices: [
      { label: "Continue", next: "forest_goose" }
    ]
  },

forest_forest: {
    image: "images/image30.jpg",
    caption: "Joujou and the joujous 🥰",
    text: "Once Princess Baby was full and ready to go, we teleported to the forest of Pierrefonds. It gave us the chance to relive some of our most recent and greatest memories. This forest has become synanimous with you for me, and I am very greatful to have this little piece of reminder of our beautiful moments together a few menutes from home. And I might be mistaken, but I think that just before we left, I saw the shadow of an old wizzard. He did not seem friendly, but it seemed like he had been through a lot through the past thousand years.",
    choices: [
      { label: "Continue", next: "soiree_choice" }
    ]
  },

forest_goose: {
    image: "images/image31.jpg",
    caption: "Joujou and the joujous 🥰 (and the goose 🤓)",
    text: "Once Princess Baby was full and ready to go, we teleported to the forest of Pierrefonds. It gave us the chance to relive some of our most recent and greatest memories. This forest has become synanimous with you for me, and I am very greatful to have this little piece of reminder of our beautiful moments together a few menutes from home. And I might be mistaken, but I think that just before we left, Ghâz Ghâz and I saw the shadow of an old wizzard. He did not seem friendly, but it seemed like he had been through a lot through the past thousand years.",
    choices: [
      { label: "Continue", next: "soiree_choice_goose" }
    ]
  },

soiree_choice: {
    image: "images/image32.jpg",
    caption: "Michelin or Stich, that is the question.",
    text: "To end this magical day, to top it all off, I have two different plans prepared for you. And it is, for the last time of the day, the time to choose. (I have heard of a high-end, excluse Stich impersonation competition Joujou, that I think you might enjoy. Alternatively, we could go for a classy dinner in a nice restaurant; to wine and to dine. Which option suits you best my love ?)",
    choices: [
      { label: "I have the itch for some Stich!", next: "stichy" },
      { label: "The sassy lady needs classy diner !", next: "dinny" }
    ]
  },

soiree_choice_goose: {
    image: "images/image33.jpg",
    caption: "Michelin or Stich, that is the question.",
    text: "Michelin or Stich, that is the question.",
    text: "To end this magical day, to top it all off, Ghâz Ghâz and I have two different plans prepared for you. And it is, for the last time of the day, the time to choose. (I have heard of a high-end, excluse Stich impersonation competition Joujou, that I think you might enjoy. Alternatively, we could go for a classy dinner in a nice restaurant; to wine and to dine. Which option suits you best my love ?)",
    choices: [
      { label: "I have the itch for some Stich!", next: "stichy_ghoosy" },
      { label: "The sassy lady needs classy diner !", next: "dinny_ghoosy" }
    ]
  },

stichy: {
    image: "images/image34.jpg",
    caption: "Stitches, Stitches everywhere!",
    text: "(Your Stitch proposal has been accepter, mister!) So off to the competition we went. The contenders were well prepared, each in their quality, comfy Stitch pijamas. There was even a pink Stitch that I didn't know existed! You as well as the rest of the Stiches were asked to do your best impression, do a cute pose, and take a comfy nap. After all of that, you came back to me, happy with your stellar performance. We had some cocktails, all colored blue (and some pink!) The jury had deliberated, they started anouncing the prizes. They anounced the best stich dance, the best impression, and some more thematic recompenses. To nobodies surprise, when it was the turn for the cute pose, they called Joujou to the stage. You were crowned the queen of the cute Stitches!",
    choices: [
      { label: "Continue", next: "ending" }
    ]
  },

stichy_ghoosy: {
    image: "images/image35.jpg",
    caption: "Stitches, Stitches everywhere!",
    text: "(Your Stitch proposal has been accepter, mister!) So off to the competition we went. The contenders were well prepared, each in their quality, comfy Stitch pijamas. There was even a pink Stitch that I didn't know existed! You as well as the rest of the Stiches were asked to do your best impression, do a cute pose, and take a comfy nap. After all of that, you came back to me, happy with your stellar performance. We had some cocktails, all colored blue (and some pink!) The jury had deliberated, they started anouncing the prizes. They anounced the best stich dance, the best impression, and some more thematic recompenses. To nobodies surprise, when it was the turn for the cute pose, they called Joujou to the stage. You were crowned the queen of the cute Stitches!",
    choices: [
      { label: "Continue", next: "ending" }
    ]
  },

dinny: {
    image: "images/image36.jpg",
    caption: "You are the star of this restaurant!",
    text: "(I'm craving the nice food you mentioned 👉🏼👈🏻🥺) you said. (Then the nice food you shall have my gorgeous). We teleported to our last destination of the night, a nice and cozy restaurant. The server showed us to our table, where a bouquet, almost as luminous and colorful as you was waiting for us. And yes, we wined, we dined, we talked, we had some amazing desert, and we played some cards with our hot beverages. A simple, but simply magical ending to your special day.",
    choices: [
      { label: "Continue", next: "ending" }
    ]
  },

dinny_ghoosy: {
    image: "images/image37.jpg",
    caption: "You are the star of this restaurant!",
    text: "(I'm craving the nice food you mentioned 👉🏼👈🏻🥺) you said. (Then the nice food you shall have my gorgeous). We teleported to our last destination of the night, a nice and cozy restaurant. The server showed us to our table, where a bouquet, almost as luminous and colorful as you was waiting for us. And yes, we wined, we dined, we talked, we had some amazing desert, and we played some cards with our hot beverages. A simple, but simply magical ending to your special day.",
    choices: [
      { label: "Continue", next: "ending" }
    ]
  },


ending: {
    image: "images/image38.jpg",
    caption: "Tavalodet Mobarak ❤️",
    text: "Happy Birthday Joujou. Nay, I congratulate myself for your birthday. I feel immensly priviledged for being able to take part in your life. I am thankful to you, and to all that we have lived through. It sucks that we didn't get to celebrate your birthday at the date of your birth, but we will soon. Can't wait for you to come back home, because home is not home without you ❤️",
    choices: []
  },

};
