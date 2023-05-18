// make sure the input is not blank before doing the following remaining tasks in this list
// create an li element 
// create a delete button 
// populate the li elements textContent or innerHTML with the input 
// populate the button textContent with an ❌ 
// append the li element with the delete button 
// append the list element with the li element just created and appended with text and the delete button YYYY
// add an event listener to the delete button that removes the li element when clicked
// send the focus to the input element
// change the input value to nothing or the empty string to clean up the interface for the user



const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', () => {
    const myChapter = input.value;
    input.value = '';

    const listChapters = document.createElement('li');
    const listText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    listChapters.appendChild(listText);
    listText.textContent = myChapter;
    listChapters.appendChild(deleteBtn);
    deleteBtn.textContent = 'X';
    list.appendChild(listChapters);
    deleteBtn.style.color = "red"
    listChapters.style.color = "green"

  
    deleteBtn.addEventListener('click', () => {
      list.removeChild(listChapters);
    });

    input.focus();
  })