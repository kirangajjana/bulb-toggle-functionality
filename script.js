let bulb=document.querySelector('#lightindoor')

let button=document.querySelector('#button')
let button1=document.querySelector('#button1')

button.addEventListener('click',function()
{
    bulb.style.backgroundColor="yellow";
})

button1.addEventListener('click',function()
{
    bulb.style.backgroundColor='white';
})