// generate a random Number
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// get the Distance of two points
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// return an String depending on the distances 
let getDistanceHint = distance => {
  if (distance < 30) {
    return "Ya casi lo estás tocando";
  } else if (distance < 40) {
    return "Super cerca";
  } else if (distance < 60) {
    return "Té estás acercando";
  } else if (distance < 100) {
    return "ahí no pero cerca";
  } else if (distance < 180) {
    return "Busca en otro lado";
  } else if (distance < 360) {
    return "No, ahí no";
  } else {
    return "Ahí no está";
  }
}
