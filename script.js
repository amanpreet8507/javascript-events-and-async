// Click Events
//Add an click listener to the window and log the event.target property. Depending on where you click in window, you will see that element printed in console.
window.addEventListener('click', (event)=>{
    console.log(event.target);
})

//Add an click listener to the Logo and bold the logo text by applying a style. Refer to DOM Style API to see how to accomplish this task.
// store logo in a variable
const logo = document.querySelector('.header__logo');

//add click listener and style it with click
logo.addEventListener('click',(e) => {
    logo.classList.add('header__logo__bold');
})


// Keypress Events
// Find the search textbox using querySelector 
const searchTextBox = document. querySelector('.search');

//and attach a keyup event listener to it using addEventListener. 
//Find the Hero Title element using 
//querySelector and change the innerHTML of it to
// be the key (event.key) that was pressed
searchTextBox.addEventListener('keyup', (eve) => {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.innerText = eve.target.value;
    eve.stopPropagation();
})

//Repeat the process by also getting the Content element and 
//changing the innerHTML to the value of the search 
//element (event.target.value).
searchTextBox.addEventListener('keyup', (evt) => {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.innerText = evt.target.value;
    evt.stopPropagation();
})


