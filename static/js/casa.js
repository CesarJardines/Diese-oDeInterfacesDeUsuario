// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


// Tamaño de la zona para la imagen 
const WIDTH = 626;
const HEIGH = 400;
// Lugar donde está el objeto
let target = {
  x: 400,
  y: 220
};


let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function (e) {
  console.log('click');
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);
  $distance.innerHTML = `<h1>${distanceHint}</h1>`;

  if (distance < 25 ) {
    alert(`Lo encontraste en ${clicks} clicks!`);
    location.href = "/simonhist/";
  }
});
