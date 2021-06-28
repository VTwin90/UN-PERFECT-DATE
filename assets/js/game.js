const optionButtonsElement = document.getElementById('option-buttons');
const textContainer = document.getElementById('textContainer');

let state = {};

//Function for starting the Game.
function startGame() {
    state = {
        score: 0
    };
    showPage(1);
}

//Function for showing the next scene/page.
function showPage(pageIndex) {
    const page = pages.find(page => page.id === pageIndex);
    document.getElementById('scene').src = 'assets/images/scenes/' + page.image;
    document.getElementById('avatar').src = 'assets/images/avatar/' + page.avatar;
    document.getElementById('mobile').src = 'assets/images/' + page.mobile;

//Removes btn and text
    optionButtonsElement.innerHTML = '';
    textContainer.innerHTML = '';

//Adds either a option btn or text container
    if (page.options.length === 0) {
        const text = document.createElement('div');
        text.innerText = page.text;
        text.id = 'text';
        textContainer.appendChild(text);
        textContainer.addEventListener('click', () => selectOption({
            nextPage: page.nextPage,
            score: 0
        }));
    } else {
        page.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button);
        });
    }
}

//If one option/storyline has no other options, then calculate score and go to ending. Else continue on to next page.
function selectOption(option) {
    const nextPageId = option.nextPage;
    if (nextPageId <= 0) {
        showEnding(state.score);
    } else {
        state.score = state.score + option.score;
        showPage(nextPageId);
    }
    console.log(state.score);
}

//Function for deciding which story ending should be picked, based on users scores.
function showEnding(score) {
    if (score <= 4) {
        window.location.href = 'end.html';
        console.log('ending1');
    } else if (score <= 8) {
        console.log('ending2');
    } else {
        console.log('ending3');
    }
}

startGame();