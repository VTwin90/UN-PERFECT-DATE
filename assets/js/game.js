const pageElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const imageElement = document.getElementById('scene');
const textContainer = document.getElementById('textContainer');

let state = {};

function startGame() {
    state = {
        score: 0
    };
    showPage(1);
}

function showPage(pageIndex) {
    const page = pages.find(page => page.id === pageIndex);
    pageElement.innerText = page.text;
    document.getElementById('scene').src = 'assets/images/scenes/' + page.image;
    optionButtonsElement.innerHTML = '';
    textContainer.addEventListener('click', () => selectOption({
        nextPage: pageIndex + 1,
        score: 0
    }));

    page.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
}

function selectOption(option) {

    const nextPageId = option.nextPage;
    if (nextPageId <= 0) {
        showEnding(state.score)
    } else {
        state.score = state.score + option.score
        showPage(nextPageId);
    }
    console.log(state.score);
}

function showEnding(score) {
    if (score <= ) 4 {
        window.location.href = 'end.html';
        console.log('ending1');
    } else if (score => 6) {
        console.log('ending2')
    } else {
        console.log('ending3');
    }
}

startGame();