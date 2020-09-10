function addi(){
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value
        num1 = parseFloat(num1)
        num2 = parseFloat(num2)
    document.getElementById('result').innerHTML='Result Addition: ' + (num1 +num2);
}

function subtra(){
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    document.getElementById('result').innerHTML='Result subtraction: ' + (num1 - num2);
}

function multi(){
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    document.getElementById('result').innerHTML='Result multiplucation: ' + (num1 * num2);
}

function divi(){
    let num1=document.getElementById('num1').value
    let num2=document.getElementById('num2').value
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    document.getElementById('result').innerHTML='Result division: ' + (num1 / num2);
}