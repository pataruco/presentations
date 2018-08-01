import './main.css';

const h1 = () => {
  const h1 = document.createElement('h1');
  h1.innerText = 'Pedro';
  return h1;
};

document.body.appendChild(h1());
