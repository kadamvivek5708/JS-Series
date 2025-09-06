const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');
  const cat = document.querySelector('#category');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter Valid Height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      cat.innerHTML = 'Under Weight';
    } else if (bmi > 18.6 && bmi < 24.9) {
      cat.innerHTML = 'Normal';
    } else {
      cat.innerHTML = 'Over Weight';
    }
  }
});
