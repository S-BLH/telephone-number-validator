document.getElementById ('check-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');

  if (userInput === '') {
    ('Please provide a phone number');
    return;
    }

    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  if (regex.test(userInput)) {
    resultsDiv.innerText = 'Valid US number: ' + userInput;
  } else {
  resultsDiv.innerText = 'Invalid US number: ' + userInput;
  }
});

  document.getElementById ('clear-btn').addEventListener('click', function() {
  const resultsDiv = document.getElementById('results-div');
  resultsDiv.innerText = '';
});