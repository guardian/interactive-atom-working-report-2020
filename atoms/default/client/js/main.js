

// if this sentence is present, then the page has loaded
const keyStentence = 'Activities that would normally require a physical presence in our offices or overseas travel have been adapted to ensure participation is still possible and the charity can continue to make a meaningful impact';


function checkExists(startAtomFunction) {
  var checkInterval = setInterval(function () {
    if (document.body.innerText.indexOf(keyStentence) > 0) {
      startAtomFunction();
      clearInterval(checkInterval);
    }
  }, 100);
}

checkExists(structureDoc);


function structureDoc() {
  createArticleWrapper();
  createSections();
  secondaryArticleJS();
}

function createArticleWrapper() {
  let articleWrapper = document.createElement("div");

  articleWrapper.classList.add("working-report__wrapper");

  let beginMoving = false;
  let wholePage = document.querySelectorAll('body > *');
  wholePage.forEach(function (el) {
    if (!beginMoving && el.classList.contains('element-atom')) {
      beginMoving = true;
    }
    if (beginMoving && el.classList.contains('l-footer')) {
      beginMoving = false;
    }
    if (beginMoving === true) {
      articleWrapper.appendChild(el);
    }
  });

  document.body.insertBefore(articleWrapper, document.querySelector('.l-footer'));

}

function createSections() {

  let wr = document.querySelector('.working-report__wrapper');

  let wrSections = wr.querySelectorAll('blockquote');
  let sectionNum = 0;
  wrSections.forEach(function (el) {
    sectionNum++;
    let newSection = document.createElement('div');
    newSection.classList.add('working-report__section__inner');

    while (el.nextElementSibling != null && el.nextElementSibling.tagName != 'BLOCKQUOTE' && !el.nextElementSibling.classList.contains('working-report__section')) {
      newSection.appendChild(el.nextElementSibling);
    }

    let newSectionWrapper = document.createElement('div');
    newSectionWrapper.classList.add('working-report__section');
    newSectionWrapper.appendChild(el);
    newSectionWrapper.appendChild(newSection);

    let sectionClass = el.innerText.split(' | ')[0]
      .replace(/[1-9]/g, '').trim()
      .toLowerCase().replace(/\s+/g, '-');
    newSectionWrapper.classList.add(sectionClass);
    newSectionWrapper.dataset.section = sectionClass;
    newSectionWrapper = sectionMods(newSectionWrapper, sectionNum);
    wr.appendChild(newSectionWrapper)

  });
}

function sectionMods(s, n) {
  let separator = s.querySelector('blockquote');
  separator.classList.add('section-header');
  let title = s.querySelector('h2');
  let titleText = title.innerText.split(' | ');
  title.innerHTML = '<span>' + titleText[0].split(' ').join('</span> <span>') + '</span>';
  if (titleText.length > 1) {
    let subTitle = document.createElement('h3');
    subTitle.innerText = titleText[1];
    separator.appendChild(subTitle);
  }

  // 2019 section numbers
  // let sectionNumber = document.createElement('div');
  // sectionNumber.classList.add('section-number');
  // sectionNumber.innerText = n;
  // separator.appendChild(sectionNumber);

  return s;
}

function secondaryArticleJS() {
  ['nav', 'illustration'].forEach((s) => {
    var el = document.createElement('script');
    el.src = '<%= atomPath %>/' + s + '.js';
    document.body.appendChild(el);
  })
}


setTimeout(() => {
  if (window.resize) {
    const html = document.querySelector('html')
    const body = document.querySelector('body')

    html.style.overflow = 'hidden'
    html.style.margin = '0px'
    html.style.padding = '0px'

    body.style.overflow = 'hidden'
    body.style.margin = '0px'
    body.style.padding = '0px'

    window.resize()
  }
}, 100)
