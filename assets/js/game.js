const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    document.getElementById("scene").src= textNode.image;
        const streetScene = textNode.image === '<img src="assets/images/scenes/streetScene.jpg"/>';
        const storeScene = textNode.image === '<img src="assets/images/scenes/storeScene.jpg"/>';
        const cafeScene = textNode.image === '<img src="assets/images/scenes/cafeScene.jpg"/>';
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        }
    });
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: 'You´re walking through your hometown street and before entering your favourite cafe, you see a lonely puppy',
    options: [
      {
        text: 'You give it a pet',
        score: 0,
        nextText: 2
      },
      {
        text: 'You ignore it',
        score: -1,
        nextText: 2
      },
       {
        text: 'You take a photo and add it to instagram',
        score: -1,
        nextText: 2
      }
    ],
    image: 'streetScene',
  },
  {
    id: 2,
    text: 'You then decide to enter the cafe. While inside you can see it is buzzing with customers, and the smell of coffee and bakeries are bringing you joy. You enter the line, look through the menu, and 3 minutes after the line is cleared and the cute barista asks what you want.',
    options: [
      {
        text: 'Black coffee',
        score: 0,
        nextText: 3
      },
      {
        text: 'Vanilla spiced latte,',
        score: 0,
        nextText: 3
      },
      {
        text: 'Tea',
        score: 0,
        nextText: 3
      }
    ],
    image: 'storeScene.jpg',
  },
  {
    id: 3,
    text: 'You wait for your order and after 5 minutes your name gets called. You grab your items and then look around to see if there are any available seats. There are only 2 spots available. 1. Is on a table in front of a cuteman and 2. in front of a cute woman. You decide to approach the:',
    options: [
      {
        text: 'Man',
        nextText: 4
      },
      {
        text: 'Woman',
        nextText: 4
      },
      {
        text: 'I do not dare, walk out the door',
        nextText: 13
      }
    ],
    image: 'streetScene',
  },
  {
    id: 4,
    text: 'You walk to the table and say:',
    options: [
      {
        text: 'Hi, Do you mind if I sit here?',
        score: 2,
        nextText: 5
      },
      {
        text: 'Just sit down without saying a word',
        score: 0,
        nextText: 6
      },
      {
        text: 'Wait until you get noticed',
        score: 1,
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'The cutie look up at you and gives you a warm smile and says: Sure, have a seat.',
    options: [
      {
        text: 'Sit down',
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: 'The cutie look up at you with confusion, but gives you a small smile.',
    options: [
      {
        text: 'Sit down',
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'The cutie looks up after noticing you fiddling with your items, gives you a smile and asks if you would like to have a seat.',
    options: [
      {
        text: 'Sit down',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'After giving each other`s names and a couple of minutes of awkward silence, you observe that Sam is reading a book, has a half empty cup of black coffee on the table, and a hardly touched bagel, you try to breach the silence by asking a question:',
    options: [
      {
        text: 'Do you come here often?',
        score: 0,
        nextText: 9
      },
      {
        text: 'How do you like your drink?',
        score: 1,
        nextText: 10
      },
      {
        text: 'How is the book?',
        score: 2,
        nextText: 11
      }
    ]
  },
  {
    id: 9,
    text: 'Sam gives you a tiny smile while giving you a “really?, that´s the original line you´re going for” look. And the conversation slowly dies out.',
    options: [
      {
        text: 'Continue',
        nextText: 12
      }
    ]
  },
  {
    id: 10,
    text: 'Sam appreciates that you are making an effort, and you continue your small talk for a bit longer.',
    options: [
      {
        text: 'Continue',
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: 'Sam gives you a big smile and starts to enthusiastically speak about the book! You have a stimulating conversation about the ins and outs of the concept, storyline and the characters of the book.',
    options: [
      {
        text: 'Continue',
        nextText: 12
      }
    ]
  },
   {
    id: 12,
    text: 'After a while you can see the conversation is getting to a standstill. You decide that you need some bff assistance and excuse yourself from the table.',
    options: [
      {
        text: 'Mobile',
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: 'You froze up, could not make a decision and went back home to enjoy your drink. Later that day, thinking back, you might just have lost a great opportunity to find the love of your life.',
    options: [
      {
        text: 'Try Again',
        nextText: -1
      }
    ]
  },
];

startGame();