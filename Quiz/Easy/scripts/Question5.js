let score = parseInt(localStorage.getItem('quizScore'));

document.querySelector('.next-question-button').addEventListener('click', () => {
  const input = document.querySelector('.question-input').value.toLowerCase();

  if (input === '') {
    alert('Please type a letter');
    return;
  }

  const validOptions = ['a', 'b', 'c', 'd'];

  if (!validOptions.includes(input)) {
    alert('Please type either a, b, c or d');
    return;
  }

  if (input === 'b') {
    score += 20;
    localStorage.setItem('quizScore', score);
    localStorage.setItem('Question5Letter', input);
  }

  if (input !== 'b') {
    localStorage.setItem('Question5Letter', input);
  }

  location.replace('Answers.html');
});