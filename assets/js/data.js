const pages = [
  {
    id: 1,
    text: 'You´re walking through your hometown street and before entering your favourite cafe, you see a lonely puppy',
    nextPage: 2,
    score: 0,
    image: 'street.jpg',
    options: [
    ],
  },
  {
    id: 2,
    text: 'You then decide to enter the cafe. While inside you can see it is buzzing with customers, and the smell of coffee and bakeries are bringing you joy. You enter the line, look through the menu, and 3 minutes after the line is cleared and the cute barista asks what you want.',
    options: [
      {
        text: 'Black coffee',
        score: 0,
        nextPage: 3
      },
      {
        text: 'Vanilla spiced latte,',
        score: 0,
        nextPage: 3
      },
      {
        text: 'Tea',
        score: 0,
        nextPage: 3
      }
    ],
    image: 'store.jpg',
  },
  {
    id: 3,
    text: '',
    options: [
      {
        text: 'Man',
        score: 1,
        nextPage: 4
      },
      {
        text: 'Woman',
        score: 1,
        nextPage: 4
      },
      {
        text: 'I do not dare, walk out the door',
        score: 1,
        nextPage: 5
      }
    ],
    image: 'cafe.jpg',
  },
  {
    id: 4,
    text: 'You walk to the table and say:',
    options: [
      {
        text: 'Hi, Do you mind if I sit here?',
        score: 2,
        nextPage: 6
      },
      {
        text: 'Just sit down without saying a word',
        score: 0,
        nextPage: 7
      },
      {
        text: 'Wait until you get noticed',
        score: 1,
        nextPage: 8
      }
    ],
     image: '',
  },
  {
    id: 5,
    text: 'You froze up, could not make a decision and went back home to enjoy your drink. Later that day, thinking back, you might just have lost a great opportunity to find the love of your life.',
    options: [
      {
        text: 'Try Again',
        nextPage: -1
      }
    ],
     image: '',
  },
  {
    id: 6,
    text: 'The cutie look up at you and gives you a warm smile and says: Sure, have a seat.',
    options: [
      {
        text: 'Sit down',
        score: 1,
        nextPage: 9
      }
    ],
     image: '',
  },
  {
    id: 7,
    text: 'The cutie look up at you with confusion, but gives you a small smile.',
    options: [
      {
        text: 'Sit down',
        score: 1,
        nextPage: 9
      }
    ],
     image: 'street.jpg',
  },
  {
    id: 8,
    text: 'The cutie looks up after noticing you fiddling with your items, gives you a smile and asks if you would like to have a seat.',
    options: [
      {
        text: 'Sit down',
        score: 1,
        nextPage: 9
      }
    ],
     image: '',
  },
  {
    id: 9,
    text: 'After giving each other`s names and a couple of minutes of awkward silence, you observe that Sam is reading a book, has a half empty cup of black coffee on the table, and a hardly touched bagel, you try to breach the silence by asking a question:',
    options: [
      {
        text: 'Do you come here often?',
        score: 0,
        nextPage: 10
      },
      {
        text: 'How do you like your drink?',
        score: 1,
        nextPage: 11
      },
      {
        text: 'How is the book?',
        score: 2,
        nextPage: 12
      }
    ],
     image: '',
  },
  {
    id: 10,
    text: 'Sam gives you a tiny smile while giving you a “really?, that´s the original line you´re going for” look. And the conversation slowly dies out.',
    options: [
      {
        text: 'Continue',
        nextPage: 13
      }
    ],
     image: '',
  },
  {
    id: 11,
    text: 'Sam appreciates that you are making an effort, and you continue your small talk for a bit longer.',
    options: [
      {
        text: 'Continue',
        nextPage: 13
      }
    ],
     image: '',
  },
  {
    id: 12,
    text: 'Sam gives you a big smile and starts to enthusiastically speak about the book! You have a stimulating conversation about the ins and outs of the concept, storyline and the characters of the book.',
    options: [
      {
        text: 'Continue',
        nextPage: 13
      }
    ],
     image: '',
  },
   {
    id: 13,
    text: 'After a while you can see the conversation is getting to a standstill. You decide that you need some bff assistance and excuse yourself from the table.',
    options: [
      {
        text: 'Mobile',
        nextPage: 13
      }
    ],
     image: '',
  },
  {
    id: 13,
    text: 'x',
    options: [
      {
        text: 'x',
        nextPage: -1 
      }
    ],
     image: '',
  },
];