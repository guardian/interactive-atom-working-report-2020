setupEmbeds();

function setupEmbeds() {
  let wr = document.querySelector('.working-report__wrapper');
  let pAll = wr.querySelectorAll('p');
  pAll.forEach((pEl) => {
    if (pEl.innerText.indexOf('Our numbers: ') >= 0) {
      makeNumberEl(pEl);
    }
  })
}

function makeNumberEl(el) {
  el.classList.add('embed');
  el.classList.add('our-numbers');
}
