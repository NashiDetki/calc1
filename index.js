let plus = document.querySelector('.plus');
let minys = document.querySelector('.minys');
let umn = document.querySelector('.umn');
let dil = document.querySelector('.dil');
let res = document.querySelector('.res');

plus.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
     res.innerText = num1 + num2
})

minys.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
     res.innerText = num1 - num2
})

umn.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
     res.innerText = num1 * num2
})

dil.addEventListener('click',function(){
    let num1 = +document.querySelector('.num1').value;
    let num2 = +document.querySelector('.num2').value;
    console.log(num1,num2);
    if (num2 == 0){
          res.innerText = 'На 0 делить нельзя!'
} else {
     res.innerText = num1 / num2
}
})

