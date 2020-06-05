// Genera un numero random 
let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}

// Obtiene distancia entre 2 puntos 
let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

// Muestra mensaje dependiendo de la distancia
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
