const thermoIncreaseYo= () => {
    var element=document.getElementById('thermo');
    element.src="start.jpeg";
    setTimeout(() => {
        element.src="oneThird.jpeg";
       }, 1000);

       setTimeout( () => {
        element.src="oneForth.jpeg";
       }, 2000);

       setTimeout(() => {
        element.src="high.jpeg";
       }, 3000);
    
}
thermoIncreaseYo();
let stop=setInterval(thermoIncreaseYo,4000);
let stopThermo=() => {
    clearInterval(stop);
}
