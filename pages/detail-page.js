function doesNotPassAllValidations(name, msg) {
    if (!name || !msg) {
        alert('You forgot to fill in your name or message!')
        return true;
    }
    if (msg.length > 280) {
        alert('You message is too long!')
        return true;
    } else {
        return false;
    }
}

function submitComment() {

    // gather info
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    
    if (doesNotPassAllValidations(name, msg)) {
        return null;
    }

    //create elements
    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    //combine data with elements
    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea.value = null;

}
