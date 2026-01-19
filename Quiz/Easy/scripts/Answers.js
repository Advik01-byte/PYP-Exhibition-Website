const answer1 = 'c';
const answer2 = 'd';
const answer3 = 'd';
const answer4 = 'a';
const answer5 = 'b';

const YourAnswer1 = document.querySelector('.user-answer-heading1');
const YourAnswer2 = document.querySelector('.user-answer-heading2');
const YourAnswer3 = document.querySelector('.user-answer-heading3');
const YourAnswer4 = document.querySelector('.user-answer-heading4');
const YourAnswer5 = document.querySelector('.user-answer-heading5');

const CorrectAnswer1 = document.querySelector('.correct-answer-heading1');
const CorrectAnswer2 = document.querySelector('.correct-answer-heading2');
const CorrectAnswer3 = document.querySelector('.correct-answer-heading3');
const CorrectAnswer4 = document.querySelector('.correct-answer-heading4');
const CorrectAnswer5 = document.querySelector('.correct-answer-heading5');

document.querySelector('.score-heading').innerHTML = `Your score is ${localStorage.getItem('quizScore')}%`;

const userAns1 = (localStorage.getItem('Question1Letter') || "").toLowerCase();
const userAns2 = (localStorage.getItem('Question2Letter') || "").toLowerCase();
const userAns3 = (localStorage.getItem('Question3Letter') || "").toLowerCase();
const userAns4 = (localStorage.getItem('Question4Letter') || "").toLowerCase();
const userAns5 = (localStorage.getItem('Question5Letter') || "").toLowerCase();

YourAnswer1.innerHTML = `Your Answer: (${userAns1.toUpperCase()})`;
YourAnswer2.innerHTML = `Your Answer: (${userAns2.toUpperCase()})`;
YourAnswer3.innerHTML = `Your Answer: (${userAns3.toUpperCase()})`;
YourAnswer4.innerHTML = `Your Answer: (${userAns4.toUpperCase()})`;
YourAnswer5.innerHTML = `Your Answer: (${userAns5.toUpperCase()})`;

CorrectAnswer1.innerHTML = `Correct Answer: (${answer1.toUpperCase()})`;
CorrectAnswer2.innerHTML = `Correct Answer: (${answer2.toUpperCase()})`;
CorrectAnswer3.innerHTML = `Correct Answer: (${answer3.toUpperCase()})`;
CorrectAnswer4.innerHTML = `Correct Answer: (${answer4.toUpperCase()})`;
CorrectAnswer5.innerHTML = `Correct Answer: (${answer5.toUpperCase()})`;

if (userAns1 === answer1) {
  YourAnswer1.style.color = '#4caf50';
  YourAnswer1.style.borderLeft = '5px solid #4caf50';
} else {
  YourAnswer1.style.color = '#ff7300';
  YourAnswer1.style.borderLeft = '5px solid #ff7300';
}

if (userAns2 === answer2) {
  YourAnswer2.style.color = '#4caf50';
  YourAnswer2.style.borderLeft = '5px solid #4caf50';
} else {
  YourAnswer2.style.color = '#ff7300';
  YourAnswer2.style.borderLeft = '5px solid #ff7300';
}

if (userAns3 === answer3) {
  YourAnswer3.style.color = '#4caf50';
  YourAnswer3.style.borderLeft = '5px solid #4caf50';
} else {
  YourAnswer3.style.color = '#ff7300';
  YourAnswer3.style.borderLeft = '5px solid #ff7300';
}

if (userAns4 === answer4) {
  YourAnswer4.style.color = '#4caf50';
  YourAnswer4.style.borderLeft = '5px solid #4caf50';
} else {
  YourAnswer4.style.color = '#ff7300';
  YourAnswer4.style.borderLeft = '5px solid #ff7300';
}

if (userAns5 === answer5) {
  YourAnswer5.style.color = '#4caf50';
  YourAnswer5.style.borderLeft = '5px solid #4caf50';
} else {
  YourAnswer5.style.color = '#ff7300';
  YourAnswer5.style.borderLeft = '5px solid #ff7300';
}