console.log('Aplicación Calculadora')

function sumar(){
    const forma = document.getElementById('forma')

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'la operación no inculye un número';
    
    document.getElementById('resultado').innerHTML = `El resultado de la suma es: ${resultado}`;

    console.log(`El resultado de la suma es: ${resultado}`);
    

}


function restar(){
    const forma = document.getElementById('forma')

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'la operación no inculye un número';
    
    document.getElementById('resultado').innerHTML = `El resultado de la resta es: ${resultado}`;

    console.log(`El resultado de la resta es: ${resultado}`);
    

}


function multiplicar(){
    const forma = document.getElementById('forma')

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'la operación no inculye un número';
    
    document.getElementById('resultado').innerHTML = `El resultado de la multiplicación es: ${resultado}`;

    console.log(`El resultado de la multiplicación es: ${resultado}`);
    

}


function dividir(){
    const forma = document.getElementById('forma')

    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'la operación no inculye un número';
    
    document.getElementById('resultado').innerHTML = `El resultado de la división es: ${resultado}`;

    console.log(`El resultado de la división es: ${resultado}`);
    

}