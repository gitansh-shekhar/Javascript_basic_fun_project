let box=document.querySelectorAll('.box');
console.log(box);
box.forEach(function(boxx){
    console.log(boxx);
  boxx.addEventListener('click',function(e){
     if(e.target.id==='yellow'){
        const b=document.querySelector('body');
        b.style.backgroundColor='yellow';
         document.querySelector('text').style.color='black';
     }
     else  if(e.target.id==='red'){
        const b=document.querySelector('body');
        b.style.backgroundColor='red';
         document.querySelector('text').style.color='white';
     }
     else  if(e.target.id==='blue'){
        const b=document.querySelector('body');
        b.style.backgroundColor='blue';
         document.querySelector('text').style.color='white';
     }
     else if(e.target.id==='green'){
        const b=document.querySelector('body');
        b.style.backgroundColor='green';
         document.querySelector('text').style.color='black';
     }
  })
})