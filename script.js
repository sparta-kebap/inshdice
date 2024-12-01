//dice face images
var diceFace1 = "images/dice_face1.png"
var diceFace2 = "images/dice_face2.png"
var diceFace3 = "images/dice_face3.png"
var diceFace4 = "images/dice_face4.png"
var diceFace5 = "images/dice_face5.png"
var diceFace6 = "images/dice_face6.png"






function rollTheDice() {
  const number = Math.floor(Math.random() * 6) + 1;
  let inputContent = '';
  //let imageSrc = '';
  switch (number) {
    case 1: inputContent = document.getElementById('numberOne').value;
    //imageSrc = diceFace1;
    break;
    case 2: inputContent = document.getElementById('numberTwo').value;
    //imageSrc = diceFace2;
    break;
    case 3: inputContent = document.getElementById('numberThree').value;
    //imageSrc = diceFace3;
    break;
    case 4: inputContent = document.getElementById('numberFour').value;
    //imageSrc = diceFace4;
    break;
    case 5: inputContent = document.getElementById('numberFive').value;
    //imageSrc = diceFace5;
    break;
    case 6: inputContent = document.getElementById('numberSix').value;
    //imageSrc = diceFace6;
    break; }
    document.getElementById('userInput').textContent = inputContent;
    document.getElementById('decisionMessage').textContent = "<--Dice God has decided-->";
    return number; }



const rollBtn = document.querySelector("#rollBtn");
const diceNumber = document.querySelector("#diceNumber");
const deleteBtn = document.querySelector("#deleteBtn")
const userInput = document.querySelector("#userInput");

rollBtn.addEventListener("click", rollTheDice);



rollBtn.addEventListener('click', function(){
  const rolledNumber = rollTheDice();
  diceNumber.innerHTML = `You got ${rolledNumber}.`;
  diceFaceImage.innerHTML = `<img src="${window[`diceFace${rolledNumber}`]}" alt="Dice Face" style="width: 84px; height: 84px; border-radius: 12px;">`;
  
});


document.addEventListener('DOMContentLoaded', (event) => {
  const enterBtn = document.getElementById('enterBtn');
  const topicInput = document.getElementById('topicInput');
  const topicField = document.getElementById('topic');

  const updateContent = () => {
    topicInput.innerHTML = `Topic: ${topicField.value}  <button class="delete-entered bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded text-xs mx-1" id="deleteEnteredBtn">x</button>`;
    topicField.value = '';

    // Add event listener for delete button after it is created
    const deleteEnteredBtn = document.getElementById('deleteEnteredBtn');
    deleteEnteredBtn.addEventListener('click', () => {
      topicInput.innerHTML = `Topic: <--empty-->`;
      topicField.value = '';
    });
  };

  enterBtn.addEventListener('click', () => {
    updateContent();
  });

  topicField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      updateContent();
    }
  });
});


  


//delete button function for input
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.p-16').addEventListener('click', function(e) {
      if (e.target && e.target.classList.contains('delete-btn')) {
        const listItem = e.target.closest('li');
        if (listItem) {
          const inputField = listItem.querySelector('input');
          if (inputField) {
            inputField.value = ''; } } } }); });

// Reset button functionality
const resetPage = () => {
  document.getElementById('numberOne').value = '';
  document.getElementById('numberTwo').value = '';
  document.getElementById('numberThree').value = '';
  document.getElementById('numberFour').value = '';
  document.getElementById('numberFive').value = '';
  document.getElementById('numberSix').value = '';
  document.getElementById('topic').value = '';
  document.getElementById('userInput').textContent = '';
  document.getElementById('decisionMessage').textContent = '';
  document.getElementById('diceNumber').textContent = '';
  document.getElementById('diceFaceImage').innerHTML = '';
  document.getElementById('topicInput').innerHTML = 'Topic: '; };

document.addEventListener('DOMContentLoaded', (event) => {
  resetBtn.addEventListener('click', resetPage);
});


//Screenshot
document.getElementById('screenshot').addEventListener('click', function() {
  takeScreenshot();
  console.log("Screenshot function called");
});

function takeScreenshot() {
  if (confirm("Are you sure you want to take a screenshot?")) {
    html2canvas(document.body).then(function(canvas) {
      var dataURL = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'screenshot.png';
      link.href = dataURL;
      link.click();
    });
  }
}


//info box
const infoIcon = document.getElementById('infoIcon');
const infoBox = document.getElementById('infoBox');
const closeInfoBox = document.getElementById('closeInfoBox');

infoIcon.addEventListener('click', () => {
  infoBox.classList.toggle('hidden');
});

closeInfoBox.addEventListener('click', () => {
  infoBox.classList.add('hidden');
});