
const pages = [
  {
    id: 1,
    text: 'It is a beautiful day and you are walking through your hometown street. You´re passing by people, just being in your own little world.',
    nextPage: 2,
    score: 0,
    image: 'street.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
    ]
  },
  {
    id: 2,
    text: 'Then you notice you are close to your favourite cafe, with its nice design and warmth. You decide to enter.',
    nextPage: 3,
    score: 0,
    image: 'street.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
    ]
  },
  {
    id: 3,
    text: 'While inside you can see it is buzzing with customers, and the smell of coffee and bakeries brings you joy.',
    nextPage: 4,
    score: 0,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
    ]
  },
  {
    id: 4,
    text: 'You enter the line, look through the menu, and three minutes after, the line is cleared and the cute barista asks what you want.',
    nextPage: 5,
    score: 0,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
    ]
  },
  {
    id: 5,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Black Coffee',
        score: 0,
        nextPage: 6
      },
      {
        text: 'Vanilla Spiced Latte',
        score: 0,
        nextPage: 6
      },
      {
        text: 'Tea',
        score: 0,
        nextPage: 6
      }
    ]
  },
  {
    id: 6,
    text: 'You wait for your order and after five minutes your name gets called. You grab your items and then look around to see if there are any available seats.',
    nextPage: 7,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
    ]
  },
  {
    id: 7,
    text: 'One is on a table in front of a handsome man and another in front of a beautiful woman. You choose to approach the:',
    nextPage: 8,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
    ]
  },
  {
    id: 8,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Man',
        score: 0,
        nextPage: 9
      },
      {
        text: 'Woman',
        score: 0,
        nextPage: 34
      }
      /*,
      {
        text: 'I don`t dare, walk out the door',
        score: 0,
        nextPage: 63
      }
      */
    ]
  },
  {
    id: 9,
    text: 'You decided to approach the man, and you walk to the table and say:',
    nextPage: 10,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
  {
    id: 10,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Hi, Do you mind if I sit here?',
        score: 2,
        nextPage: 11
      },
      {
        text: 'Just sit down without saying a word',
        score: 0,
        nextPage: 12
      },
      {
        text: 'Wait until you get noticed',
        score: 1,
        nextPage: 13
      }
    ],
  },
  {
    id: 11,
    text: 'The man looks up at you and gives you a smile and says: "Sure, have a seat".',
    nextPage: 14,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileMan.png',
    options: [ ]
  },
  {
    id: 12,
    text: 'The man looks up at you with confusion, but lets you have a seat.',
    nextPage: 14,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'confusedMan.png',
    options: [ ]
  },
  {
    id: 13,
    text: 'The man looks up after noticing you fiddling with your items, and asks if you would like to have a seat.',
    nextPage: 14,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 14,
    text: 'After giving each other´s names and a couple of minutes of awkward silence, you start to observe more about Sam.',
    nextPage: 15,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 15,
    text: 'He is reading a book, has a half empty cup of black coffee on the table, and a hardly touched bagel, you try to breach the silence by asking a question:',
    nextPage: 16,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
  {
    id: 16,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Do you come here often?',
        score: 0,
        nextPage: 17
      },
      {
        text: 'How do you like your drink?',
        score: 1,
        nextPage: 18
      },
      {
        text: 'How is the book?',
        score: 2,
        nextPage: 19
      }
    ]
  },
  {
    id: 17,
    text: 'Sam gives you a tiny smile while giving you a “really?, that is the original line you´re going for” look. And the conversation slowly dies out.',
    nextPage: 20,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 18,
    text: 'Sam appreciates that you are making an effort, and you continue your small talk for a bit longer.',
    nextPage: 20,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 19,
    text: 'Sam gives you a big smile and starts to enthusiastically speak about the book! You have a stimulating conversation for a few minutes.',
    nextPage: 20,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileMan.png',
    options: [ ]
  },
  {
    id: 20,
    text: 'After a while you can see the conversation is getting to a standstill. You decide that you need some bff assistance and excuse yourself from the table.',
    nextPage: 21,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 21,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobile.gif',
    avatar: 'none.png' ,
    options: [
      {
        text: 'Continue',
        score: 0,
        nextPage: 22
      }
    ]
  },
  {
    id: 22,
    text: 'On your way back to the table, as well as considering getting a new BFF, you can see Sam is about to get up. You try and get yourself back into conversation by saying:',
    nextPage: 23,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 23,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Do you want another drink?',
        score: 1,
        nextPage: 24
      },
      {
        text: 'You can´t leave yet!',
        score: 0,
        nextPage: 25
      },
      {
        text: 'Leaving so soon?',
        score: 2,
        nextPage: 26
      }
    ]
  },
  {
    id: 24,
    text: 'Sam smiles at you but declines your offer, he needs to get going and catch the next train.',
    nextPage: 27,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileMan.png',
    options: [ ]
  },
  {
    id: 25,
    text: 'Sam looks at you like he is not sure if you´re talking to him. Though he lets you know that he needs to get going and catch the next train.',
    nextPage: 27,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'surprisedMan.png',
    options: [ ]
  },
  {
    id: 26,
    text: 'Sam gives you a smile but tells you that he needs to get going and catch the next train.',
    nextPage: 27,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'waveMan.png',
    options: [ ]
  },
  {
    id: 27,
    text: 'You are considering all your options and hoping that it is the right decision you ask:',
    nextPage: 28,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
   {
    id: 28,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'So give me your number and I´ll let you go!',
        score: 0,
        nextPage: 29
      },
      {
        text: 'It seem like we have a lot in common. Would you like to keep in touch?',
        score: 2,
        nextPage: 30
      },
      {
        text: 'Ahh, okay, it was cool to meet you! Let´s exchange numbers!',
        score: 1,
        nextPage: 31
      }
    ]
  },
  {
    id: 29,
    text: 'Sam gives you a tiny smile, and ends up scribbling some numbers down on a napkin.',
    nextPage: 32,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 30,
    text: 'Sam gently asks for your phone and you exchange numbers.',
    nextPage: 32,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'manSmile.png',
    options: [ ]
  },
  {
    id: 31,
    text: 'Sam grabs your hand and writes his number on your arm with his pen.',
    nextPage: 32,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileMan.png',
    options: [ ]
  },
  {
    id: 32,
    text: 'Then Sam leaves the coffee shop, and you were by yourself, feeling excited and proud of yourself for at least daring to take a chance. Now the question is:',
    nextPage: 33,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
  {
    id: 33,
    text: [''],
    image: 'street.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'What do the future hold for you?',
        nextPage: -1
      }
    ]
  },

/////Woman Story line
{
    id: 34,
    text: 'You decided to approach the woman, and you walk to the table and say:',
    nextPage: 35,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
  {
    id: 35,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Hi, Do you mind if I sit here?',
        score: 2,
        nextPage: 36
      },
      {
        text: 'Just sit down without saying a word',
        score: 0,
        nextPage: 37
      },
      {
        text: 'Wait until you get noticed',
        score: 1,
        nextPage: 38
      }
    ],
  },
  {
    id: 36,
    text: 'The woman looks up at you and gives you a smile and says: "Sure, have a seat".',
    nextPage: 39,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileWoman.png',
    options: [ ]
  },
  {
    id: 37,
    text: 'The woman looks at you a bit with suprised-confusion, but lets you have a seat.',
    nextPage: 39,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'surprisedWoman.png',
    options: [ ]
  },
  {
    id: 38,
    text: 'The woman looks up after noticing you fiddling with your items, and asks if you would like to have a seat.',
    nextPage: 39,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 39,
    text: 'After giving each other´s names and a couple of minutes of awkward silence, you start to observe more about Sam.',
    nextPage: 40,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 40,
    text: 'She is reading a book, has a half empty cup of black coffee on the table, and a hardly touched bagel, you try to breach the silence by asking a question:',
    nextPage: 41,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
  {
    id: 41,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Do you come here often?',
        score: 0,
        nextPage: 42
      },
      {
        text: 'How do you like your drink?',
        score: 1,
        nextPage: 43
      },
      {
        text: 'How is the book?',
        score: 2,
        nextPage: 44
      }
    ]
  },
  {
    id: 42,
    text: 'Sam gives you a smirk while giving you a “really?, that is the original line you´re going for” look. And the conversation slowly dies out.',
    nextPage: 45,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smirkWoman.png',
    options: [ ]
  },
  {
    id: 43,
    text: 'Sam appreciates that you are making an effort, and you continue your small talk for a bit longer.',
    nextPage: 45,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 44,
    text: 'Sam gives you a big smile and starts to enthusiastically speak about the book! You have a stimulating conversation for a few minutes.',
    nextPage: 45,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileWoman.png',
    options: [ ]
  },
  {
    id: 45,
    text: 'After a while you can see the conversation is getting to a standstill. You decide that you need some bff assistance and excuse yourself from the table.',
    nextPage: 46,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 46,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobile.gif',
    avatar: 'none.png' ,
    options: [
      {
        text: 'Continue',
        score: 0,
        nextPage: 47
      }
    ]
  },
  {
    id: 47,
    text: 'On your way back to the table, as well as considering getting a new BFF, you can see Sam is about to get up. You try and get yourself back into conversation by saying:',
    nextPage: 48,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 48,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'Do you want another drink?',
        score: 1,
        nextPage: 49
      },
      {
        text: 'You can´t leave yet!',
        score: 0,
        nextPage: 50
      },
      {
        text: 'Leaving so soon?',
        score: 2,
        nextPage: 51
      }
    ]
  },
  {
    id: 49,
    text: 'Sam smiles at you but declines your offer, she needs to get going and catch the next train.',
    nextPage: 52,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileWoman.png',
    options: [ ]
  },
  {
    id: 50,
    text: 'Sam looks at you like you grown a second head and not quite sure of your mental state. Though she lets you know that she needs to get going and catch the next train.',
    nextPage: 52,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smirkWoman.png',
    options: [ ]
  },
  {
    id: 51,
    text: 'Sam gives you a smile but tells you that she needs to get going and catch the next train.',
    nextPage: 52,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 52,
    text: 'You are considering all your options and hoping that it is the right decision you ask:',
    nextPage: 53,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
   {
    id: 53,
    text: [''],
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'So give me your number and I´ll let you go!',
        score: 0,
        nextPage: 54
      },
      {
        text: 'It seem like we have a lot in common. Would you like to keep in touch?',
        score: 2,
        nextPage: 55
      },
      {
        text: 'Ahh, okay, it was cool to meet you! Let´s exchange numbers!',
        score: 1,
        nextPage: 56
      }
    ]
  },
  {
    id: 54,
    text: 'Sam gives you a tiny smile, and ends up scribbling some numbers down on a napkin.',
    nextPage: 57,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 55,
    text: 'Sam gently asks for your phone and you exchange numbers.',
    nextPage: 57,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'smileWoman.png',
    options: [ ]
  },
  {
    id: 56,
    text: 'Sam grabs your hand and writes her number on your arm with her pen.',
    nextPage: 57,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'bigSmileWoman.png',
    options: [ ]
  },
  {
    id: 57,
    text: 'Then Sam leaves the coffee shop, and you were by yourself, feeling excited and proud of yourself for at least daring to take a chance. Now the question is:',
    nextPage: 58,
    image: 'cafe.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [ ]
  },
  {
    id: 58,
    text: [''],
    image: 'street.jpg',
    mobile: 'scenes/mobileNone.png',
    avatar: 'none.png',
    options: [
      {
        text: 'What do the future hold for you?',
        nextPage: -1
      }
    ]
  } //,

 ////Froze up storyline
  /* {
    id: 63,
    text: 'You froze up, could not make a decision and went back home to enjoy your drink.',
    nextPage: 64,
    image: 'street.jpg',
    options: [
    ]
  },
  {
    id: 64,
    text: [''],
    image: 'street.jpg',
    options: [
      {
        text: 'What do the future hold for you?',
        nextPage: -1
      }
    ]
  } */
];
