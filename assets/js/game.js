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
    image: 'streetScene.jpg',
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
    text: 'You wait for your order and after 5 minutes your name gets called. You grab your items and then look around to see if there are any available seats. There are only 2 spots available. 1. Is on a table in front of a handsome man and 2. in front of a beautiful woman. You decide to approach the:',
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
    image: 'streetScene.jpg',
  },
];

startGame();