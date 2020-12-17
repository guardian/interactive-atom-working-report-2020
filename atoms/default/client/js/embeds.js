setupEmbeds();

function setupEmbeds() {
  let wr = document.querySelector('.working-report__wrapper');
  let pAll = wr.querySelectorAll('p');
  pAll.forEach((pEl) => {

    const text = pEl.innerText.toLowerCase();

    if (text.indexOf('our numbers: ') >= 0) {
      makeNumberEl(pEl);
    }
    if (text.indexOf('from our supporters: ') >= 0) {
      makeSupporterQuoteEl(pEl);
    }
  })
}

function makeNumberEl(el) {
  el.classList.add('embed');
  el.classList.add('our-numbers');
  checkFloat(el);

  if (el.innerText.indexOf('900,000') >= 0) {
    el.classList.add('long-number');
  }
}

function makeSupporterQuoteEl(el) {
  el.classList.add('embed');
  el.classList.add('supporter-quote');
  checkFloat(el);

  el.innerHTML = el.innerHTML.split('From our supporters: ').join('');
  el.innerHTML = `<div class='s'>From our supporters</div>${el.innerHTML}`;

  let name = el.querySelector('strong');
  let loc = el.querySelector('em');

  name.innerHTML = name.innerHTML.split(',').join('');

  const locArray = loc.innerText.trim().split(',').join('').split(' ');
  let locationLabel;
  if (locArray.length >= 2) {
    locationLabel = `${locArray[locArray.length - 2]}-${locArray[locArray.length - 1]}`;
  }

  if (locationLabel) {
    loc.dataset.location = locationLabel;
  }

}

function checkFloat(el) {
  // ** means it can float
  if (el.innerText.indexOf('**') >= 0) {
    el.innerHTML = el.innerHTML.split('**').join('');
    el.classList.add('can-float');
  }
}

