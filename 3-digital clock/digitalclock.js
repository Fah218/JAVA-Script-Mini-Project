const clock=document.getElementById('clock');


setInterval(function(){
    let date=new Date();
    // console.log(date.toLocalTimeString())
    clock.innerHTML=date.toLocaleTimeString();

},1000);