'use strict';

const helpBtn = document.querySelector('.help-btn');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');


function addBlock() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('modal-backdrop', 'show');
    document.body.appendChild(newDiv);
};

function removeBlock() {
    const el = document.querySelector('.modal-backdrop');
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

function modalOpen() {
    document.body.classList.add('modal-open');
    modal.classList.add('show', 'slide-bottom');
    modal.style.display = 'block';
    modal.removeAttribute('aria-hidden');
}

function modalClose() {
    document.body.classList.remove('modal-open');
    modal.classList.remove('show', 'slide-bottom');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

helpBtn.addEventListener('click', function () {
    modalOpen();
    addBlock();
});

closeBtn.addEventListener('click', function () {
    modalClose();
    removeBlock();
});

document.addEventListener('click', function (event) {
    if (event.target === modal) {
        modalClose();
        removeBlock();
    }
});

