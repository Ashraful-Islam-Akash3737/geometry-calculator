// function to reuse
const input = (idName) => {
    const idInput = document.getElementById(idName);
    const idOutputText = idInput.value;
    return result = parseFloat(idOutputText);
}
const displayArea = (idName, area) => {
    const triangleArea = document.getElementById(idName);
    triangleArea.innerText = area;
}

const handleCalculation = (idName, name, area) => {
    const calculationContainer = document.getElementById(idName);
    const p = document.createElement('p');
    p.classList.add('p');
    const count = p.childElementCount;
    p.innerHTML = `
       ${count + 1}. ${name} ${area} <span>cm<sup>2</sup></span;
    `;
    calculationContainer.appendChild(p);
}



// triangle area
function handleTriangleArea() {
    // const triangleBaseInput = document.getElementById('triangle-base');
    // const triangleBaseText = triangleBaseInput.value;
    // const base = parseFloat(triangleBaseText);
    let base = input('triangle-base');
    let height = input('triangle-height');

    if (isNaN(base) || isNaN(height)) {
        return ('please, provide a valid number.')

    }


    const area = 0.5 * base * height;
    displayArea('triangle-area', area);
    handleCalculation('calculation-container', "Triangle area is: ", area);
    document.getElementById('triangle-base').value =  '';
    document.getElementById('triangle-height').value =  '';

}
// rectangle area
function handleRectangleArea() {
    const width = input('rectangle-width');
    const length = input('rectangle-length');

    const area = width * length;
    displayArea('rectangle-area', area);
    handleCalculation('calculation-container', "Rectangle area is: ", area);

    document.getElementById('rectangle-width').value =  '';
    document.getElementById('rectangle-length').value =  '';
}
// parallelogram area
function handleParallelogramArea() {
    const base = input('parallelogram-base');
    const height = input('parallelogram-height');

    const area = base * height;
    displayArea('parallelogram-area', area);
    handleCalculation('calculation-container', "Parallelogram area is: ", area);

    document.getElementById('parallelogram-base').value =  '';
    document.getElementById('parallelogram-height').value =  '';
}

// rhombus area
function handleRhombusArea() {
    const d1 = input('rhombus-d1');
    const d2 = input('rhombus-d2');

    const area = 0.5 * d1 * d2;
    displayArea('rhombus-area', area);
    handleCalculation('calculation-container', "Rhombus area is: ", area);

    document.getElementById('rhombus-d1').value =  '';
    document.getElementById('rhombus-d2').value =  '';

}
// pentagon area
function handlePentagonArea() {
    const p = input('pentagon-p');
    const b = input('pentagon-b');

    const area = 0.5 * p * b;
    displayArea('pentagon-area', area);
    handleCalculation('calculation-container', "Pentagon area is: ", area);

    document.getElementById('pentagon-p').value =  '';
    document.getElementById('pentagon-b').value =  '';
}
// ellipse area
function handleEllipseArea() {
    const a = input('ellipse-a');
    const b = input('ellipse-b');

    const area = 3.1416 * a * b;
    displayArea('ellipse-area', area);
    handleCalculation('calculation-container', "Ellipse area is: ", area);

    document.getElementById('ellipse-a').value =  '';
    document.getElementById('ellipse-b').value =  '';

}
