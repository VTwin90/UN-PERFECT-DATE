
const pages = [
  {
    id: 1,
    text: 'It is a beautiful sunny day and you are walking through your hometown street. You´re passing by people, just being in your own little world.',
    nextPage: 2,
    score: 0,
    image: 'street.jpg',
    options: [
    ]
  },
  {
    id: 2,
    text: 'Then you notice you are close to your favourite cafe, with its nice modern brick look. You decide to enter.',
    nextPage: 3,
    score: 0,
    image: 'store.jpg',
    options: [
    ]
  },
  {
    id: 3,
    text: 'While inside you can see it is buzzing with customers, and the smell of coffee and bakeries brings you joy.',
    nextPage: 4,
    score: 0,
    image: 'cafe.jpg',
    options: [
    ]
  },
  {
    id: 4,
    text: 'You enter the line, look through the menu, and three minutes after, the line is cleared and the cute barista asks what you want.',
    nextPage: 5,
    score: 0,
    image: 'cafe.jpg',
    options: [
    ]
  },
  {
    id: 5,
    text: [''],
    image: 'cafe.jpg',
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
    text: 'You wait for your order and after five minutes your name gets called. You grab your items and then look around to see if there are any available seats. There are only two spots available. One is on a table in front of a handsome man and another in front of a beautiful woman. You choose to approach the:',
    nextPage: 7,
    image: 'cafe.jpg',
    options: [
    ]
  },
  {
    id: 7,
    text: [''],
    image: 'cafe.jpg',
    options: [
      {
        text: 'Man',
        score: 0,
        nextPage: 8
      },
      {
        text: 'Woman',
        score: 0,
        nextPage: 63
      },
      {
        text: 'I don`t dare, walk out the door',
        score: 0,
        nextPage: 63
      }
    ]
  },
  {
    id: 8,
    text: 'You decided to approach the man, and you walk to the table and say:',
    nextPage: 9,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 9,
    text: [''],
    image: 'cafe.jpg',
    options: [
      {
        text: 'Hi, Do you mind  if I sit here?',
        score: 2,
        nextPage: 10
      },
      {
        text: 'Just sit down without saying a word',
        score: 0,
        nextPage: 11
      },
      {
        text: 'Wait until you get noticed',
        score: 1,
        nextPage: 12
      }
    ]
  },
  {
    id: 10,
    text: 'The man looks up at you and gives you a warm smile and says: "Sure, have a seat".',
    nextPage: 13,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 11,
    text: 'The man looks up at you with confusion, but gives you a small smile.',
    nextPage: 13,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 12,
    text: 'The man looks up after noticing you fiddling with your items, gives you a smile and asks if you would like to have a seat.',
    nextPage: 13,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 13,
    text: 'After giving each other´s names and a couple of minutes of awkward silence, you observe that Sam is reading a book, has a half empty cup of black coffee on the table, and a hardly touched bagel, you try to breach the silence by asking a question:',
    nextPage: 14,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 14,
    text: [''],
    image: 'cafe.jpg',
    options: [
      {
        text: 'Do you come here often?',
        score: 0,
        nextPage: 15
      },
      {
        text: 'How do you like your drink?',
        score: 1,
        nextPage: 16
      },
      {
        text: 'How is the book?',
        score: 2,
        nextPage: 17
      }
    ]
  },
  {
    id: 15,
    text: 'Sam gives you a tiny smile while giving you a “really?, that is the original line you´re going for” look. And the conversation slowly dies out.',
    nextPage: 18,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 16,
    text: 'Sam appreciates that you are making an effort, and you continue your small talk for a bit longer.',
    nextPage: 18,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 17,
    text: 'Sam gives you a big smile and starts to enthusiastically speak about the book! You have a stimulating conversation about the ins and outs of the concept, storyline and the characters of the book.',
    nextPage: 18,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 18,
    text: 'After a while you can see the conversation is getting to a standstill. You decide that you need some bff assistance and excuse yourself from the table.',
    nextPage: 19,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 19,
    text: [''],
    image: 'mobile.gif',
    options: [
      {
        text: 'Continue',
        score: 0,
        nextPage: 20
      }
    ]
  },
  {
    id: 20,
    text: 'On your way back to the table, as well as considering getting a new BFF, you can see Sam is about to get up. You try and get yourself back into conversation by saying:',
    nextPage: 21,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 21,
    text: [''],
    image: 'cafe.jpg',
    options: [
      {
        text: 'Do you want another drink?',
        score: 1,
        nextPage: 22
      },
      {
        text: 'You can´t leave yet!',
        score: 0,
        nextPage: 23
      },
      {
        text: 'Leaving so soon?',
        score: 2,
        nextPage: 24
      }
    ]
  },
  {
    id: 22,
    text: 'Sam smiles at you but declines your offer, he needs to get going and catch the next train.',
    nextPage: 25,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 23,
    text: 'Sam looks at you like you have grown two heads. He lets you know that he needs to get going and catch the next train.',
    nextPage: 25,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 24,
    text: 'Sam gives you a smile but tells you that he needs to get going and catch the next train.',
    nextPage: 25,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 25,
    text: 'You are considering all your options and hoping that it is the right decision you ask:',
    nextPage: 26,
    image: 'cafe.jpg',
    options: [ ]
  },
   {
    id: 26,
    text: [''],
    image: 'cafe.jpg',
    options: [
      {
        text: 'What if I follow you to the train stop? Or give me your number and I´ll let you go!',
        score: 0,
        nextPage: 27
      },
      {
        text: 'It was really nice talking to you, it seems like we have a lot in common. Would you like to keep in touch?',
        score: 2,
        nextPage: 28
      },
      {
        text: 'Ahh, okay, well it was cool to meet you! Let´s exchange numbers!',
        score: 1,
        nextPage: 29
      }
    ]
  },
  {
    id: 27,
    text: 'Sam gives you a tiny smile, and ends up scribbling some numbers down on a napkin.',
    nextPage: 30,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 28,
    text: 'Sam gently asks for your phone and you exchange numbers.',
    nextPage: 30,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 29,
    text: 'Sam grabs your hand and writes his number on your arm with his pen.',
    nextPage: 30,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 30,
    text: 'Then Sam leaves the coffee shop, and you were by yourself, feeling excited and proud of yourself for at least daring to take a chance. Now the question is: where will this go?',
    nextPage: 31,
    image: 'cafe.jpg',
    options: [ ]
  },
  {
    id: 31,
    text: [''],
    image: 'street.jpg',
    options: [
      {
        text: 'What do the future hold for you?',
        nextPage: -1
      }
    ]
  },
  {
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
  }
];
