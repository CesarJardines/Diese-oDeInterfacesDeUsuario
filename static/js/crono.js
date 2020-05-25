const getRemainTime= deadline=>{/*getRemainTime significa obtener el tiempo faltante*/
        let now= new Date(),/*new Date() nos devuelve la fecha actual*/
         remainTime=(new Date(deadline)-now+1000)/1000,/*remaiTime=new Date(deadline)-now tiempo que falta para 
         llegar está fecha limite nos devuelve en milisegundo y lo dividimos en 1000 para que pasé a segundos*/
         remainSeconds=('0'+Math.floor(remainTime % 60)).slice(-2),/*En segundos, Math.floor pasar 
         numero entero, y slice(-2) hace seleccionar los 2 ultimos digitos*/
         remainMinutes=('0'+Math.floor(remainTime /60 % 60)).slice(-2),
         remainHours=('0'+Math.floor(remainTime /3600 % 24)).slice(-2),/*Cuantos segundos hay 
        en un hora (3600) y cuantas horas hay en un día (24)*/
        remainDays=Math.floor(remainTime / (3600 * 24));/*3600 que tiene una hora y 24 horas que
        tiene un día*/
         return{
          remainTime,
          remainSeconds,
          remainMinutes,
          remainHours,
          remainDays
         }
};
//console.log(getRemainTime('Oct 17 2019 15:26:43 GMT-0600'));
window.onload = updateClock;
var totalTime = 10;
function updateClock() {
document.getElementById('countdown').innerHTML = totalTime;
if(totalTime==0){
alert('Final');
}else{
totalTime-=1;
setTimeout("updateClock()",1000);
}
}