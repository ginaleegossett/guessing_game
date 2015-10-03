// define variables to display response on page
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var questions = ['First Question. Have I lived outside the USA? Yes/No', 'Next question. Do you like spam the food? Yes/No', 'Final question. Do I have any siblings? Yes/No']
var answers = ['YES', 'Y', 'NO', 'N']
var imgOne = document.getElementById('imgOne');
var imgTwo = document.getElementById('imgTwo');
var imgThree = document.getElementById('imgThree');

var tally = 0; //This is the number they would have gotten correct

// var userName = prompt('Please enter your name')
// alert('Hi ' + userName +'!' + ' Welcome to my guessing game.')

function ques1() {
  var question1 = prompt(questions[0]);
  if (question1.toUpperCase() === answers[0] ||
      question1.toUpperCase() === answers[1]) {
    one.innerHTML = 'Good Job! You got it right!';
    imgOne.innerHTML = "<img src = img/SKflag.jpeg width=200 />";
    one.className = "right";
    tally++;
  } else {
    one.innerHTML = 'You guessed wrong.';
    one.className = "wrong";
  }
  console.log('Question 1 response: ' + question1);
}

function ques2() {
  var question2 = prompt(questions[1]);
  if (question2.toUpperCase() === answers[0] ||
      question2.toUpperCase() === answers[1] ){
    two.innerHTML = 'Awesome! Spam is great!';
    imgTwo.innerHTML = "<img src = img/spam.jpeg width=200 />";
    two.className = "right";
    tally++;
  } else {
    two.innerHTML = 'Wrong answer. Spam is great.';
    two.className = "wrong";
  }
  console.log('Question 2 response: ' + question2);
}

function ques3() {
  var question3 = prompt(questions[2]);
  if (question3.toUpperCase() === answers[0] ||
      question3.toUpperCase() === answers[1] ) {
    three.innerHTML = 'Correct! I have a sister and 2 brothers.';
    imgThree.innerHTML = "<img src = img/family.jpg width=200 />";
    three.className = "right";
    tally++;
  } else {
    three.innerHTML = 'Wrong. I have a sister and 2 brothers.';
    three.className = "wrong";
  }
  console.log('Question 3 response: ' + question3);
}

ques1();
window.setTimeout(ques2, 2000);
window.setTimeout(ques3, 2000);

// alert("Hi " + userName + "! " +
//   " You got " + tally +
//   " correct out of 3. \nThank you for playing.");

console.log('The players name: ' + userName)
console.log('Total correct:' + tally);

