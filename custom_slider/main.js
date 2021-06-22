const slider = document.getElementById('slider');
const selector = document.getElementById('selector');
const selectorValue = document.getElementById('selectorValue');
const progressBar = document.getElementById('progressBar');

selectorValue.innerHTML = selector.value;

slider.oninput = function () {
    selectorValue.value = selector.value + '%';
    selector.style.left = this.value + '%';
    progressBar.style.width = this.value + '%';
}


