// import {
//   getRandomNumber,
//   getDistance,
//   getDistanceHint
// } from './helper';


const WIDTH = 626;
const HEIGH = 352;

let target = {
  x: 50,
  y: 190
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
    location.href = "/mesMemo/";
  }
});
