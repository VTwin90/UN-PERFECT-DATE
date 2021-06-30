//Changing end text 
function scoreFromQuery(query) {
    const urlParams = new URLSearchParams(query);
    return urlParams.get('score');
}

function changeEndText() {
    const score = parseInt(scoreFromQuery(window.location.search))
    if (score < 4) {
        // ending 1
        const endTextElement = document.getElementById('end-text');
        endTextElement.innerText = 'You ended up getting a fake number, and never saw Sam again. Want another try in changing your fate? How about choosing another path and see what can come out from it if you dare to take a chance!';
        
    } else if (score > 4 && score < 6) {
        // ending 2
        const endTextElement = document.getElementById('end-text');
        endTextElement.innerText = 'You got Sam´s number, and you texted a bit back and forth. You both had a lot in common but realised you were better off as friends. But you can´t let the thought go: what if you had made a different choice. Could you then have been something more?';

    } else {
        // ending 3
        const endTextElement = document.getElementById('end-text');
        endTextElement.innerText = 'You got Sam´s number, and through a bunch of texts, calls, snaps:  you both realised you had a lot in common as well as a mutual attraction for one another. Which then grew to become a happy, mature, loving partnership. People would be lucky to have what you two have! All because you dared to take a chance and start a conversation with someone new, inquiring about their interests and be open and honest with your intentions and interests.';
    }
}

changeEndText();