const actions = document.getElementById('actions');
const triangle = document.getElementById('triangle');
const pyramid = document.getElementById('pyramid');
const repyramid = document.getElementById('reversepyramid');
const diamond = document.getElementById('diamond');
const result = document.getElementById('result');


const outputResult = value => {
    result.innerHTML = value;
}

const clear = () => {
    triangle.value = "";
    pyramid.value = "";
    repyramid.value = "";
    diamond.value = "";
    outputResult("");
}

function buildTriangle() {
    let star = '';
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= a; b++) {
            star = star + '* ';
        }
        star = star + "<br/>";
    }
    return star;
}

function buildPyramid() {
    let star = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10 - i; j++) {
            star = star + '&nbsp;';
        }
        for (let s = 0; s < (2 * i + 1); s++) {
            star = star + '*';
        }
        star = star + "<br/>";
    }
    return star;
}

function buildRePyramid() {
    let star = '';
    for (i = 10; i >= 1; i--) {
        for (j = i; j < 10; j++) {
            star = star + '&nbsp;';
        }
        for (k = 0; k < (i * 2) - 1; k++) {
            star = star + "*";
        }
        star = star + "<br/>";
    }
    return star;
}

function buildDiamond() {
    let star = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10 - i; j++) {
            star = star + '&nbsp;';
        }
        for (let s = 0; s < (2 * i + 1); s++) {
            star = star + '*';
        }
        star = star + "<br/>";
    }
    //return star;
    for (i = 10; i >= 1; i--) {
        for (j = i - 1; j < 10; j++) {
            star = star + '&nbsp;';
        }
        for (k = 0; k < (i * 2) - 1; k++) {
            star = star + "*";
        }
        star = star + "<br/>";
    }
    return star;
}

actions.addEventListener('click', event => {
    const actionsName = event.target.id;
    //console.log(event);

    switch (actionsName) {
        case 'triangle':
            outputResult(buildTriangle());
            break;
        case 'pyramid':
            outputResult(buildPyramid());
            break;
        case 'reversepyramid':
            outputResult(buildRePyramid());
            break;
        case 'diamond':
            outputResult(buildDiamond());
            break;
        case 'clear':
            clear();
            break;
        default:
            clear();
    }
});