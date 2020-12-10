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

  if (el.innerText.indexOf('900,000') >= 0) {
    el.classList.add('long-number');
  }

  // if a number has a ** it should be always fullwidth
  if (el.innerText.indexOf('**') >= 0) {
    el.innerHTML = el.innerHTML.split('**').join('');
  } else {
    el.classList.add('can-float');
  }

}
