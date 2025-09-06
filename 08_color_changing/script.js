const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    let key = e.target.id;
    switch (key) {
      case 'grey':
        body.style.backgroundColor = key;
        break;
      case 'white':
        body.style.backgroundColor = key;
        break;
      case 'blue':
        body.style.backgroundColor = key;
        break;
      case 'yellow':
        body.style.backgroundColor = key;
        break;
      case 'red':
        body.style.backgroundColor = key;
        break;
      case 'black':
        body.style.backgroundColor = key;
        break;

      default:
        break;
    }
  });
});
