const currenttime=document.querySelector('.button1');
let time=document.querySelector('.time');
currenttime.addEventListener("click", function(){
    setInterval(function(){
        let date=new Date();
        time.innerHTML=date.toLocaleTimeString();
    },1000);
})
// Stopwatch 
let controls= document.querySelectorAll('.button');
let prevsec=0;
let prevmin=0;
let seconds=0;
let minutes=0;
let timerid=0;
function updatetimer(){
    timerid=setInterval(function(){
            seconds++;
            if(seconds==60){
                seconds=0;
                minutes++;
            }
           const minStr = minutes.toString().padStart(2, '0');
            const secStr = seconds.toString().padStart(2, '0'); 
          document.querySelector('.clock').textContent= `${minStr}:${secStr}`; 
         },1000); 
};
controls.forEach(function(control){
  control.addEventListener("click",function(){
    if(control.textContent=="Start"){
        seconds=prevsec;
        minutes=prevmin;
        if(timerid==0)
          updatetimer(); 
    }
    else if(control.innerHTML=="Stop"){
        prevmin=minutes;
        prevsec=seconds;
        clearInterval(timerid);
        timerid=0;
        const minStr = prevmin.toString().padStart(2, '0');
        const secStr =prevsec.toString().padStart(2, '0'); 
          document.querySelector('.clock').textContent= `${minStr}:${secStr}`;    
    }
    else {
        clearInterval(timerid);
        timerid=0;
        prevmin=0;
        prevsec=0;
        minutes=0;
        seconds=0;
       const minStr = prevmin.toString().padStart(2, '0');
        const secStr =prevsec.toString().padStart(2, '0'); 
          document.querySelector('.clock').textContent= `${minStr}:${secStr}`;  

    }
  })
})
