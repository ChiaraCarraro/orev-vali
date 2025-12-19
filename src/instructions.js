import './css/landingpages.css';
const button = document.getElementById('instructions-button');

const storedChoices = localStorage.getItem('storedChoices');
let studyChoices;

// If we find data in local storage, set studyChoices to that data
if (storedChoices) {
  studyChoices = JSON.parse(storedChoices);
  console.log('Study Choices instructions.html:', studyChoices);
} else {
  console.log('No data found in local storage. Setting default values.');
}

// get and store parameters. If local storage is empty, set default values
studyChoices.ID = studyChoices?.ID ?? 'testID';
studyChoices.webcam = studyChoices?.webcam ?? false;
// studyChoices.saving = studyChoices?.saving ?? 'download';

// define what happens on button click
const handleContinueClick = (event) => {
  event.preventDefault();
  // save the choices to local storage
  localStorage.setItem('storedChoices', JSON.stringify(studyChoices));
  window.location.href = `./orev.html`;
};

button.addEventListener('click', handleContinueClick, {
  capture: false,
});
