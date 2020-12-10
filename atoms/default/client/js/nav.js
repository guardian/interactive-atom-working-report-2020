createNav();

function createNav() {
  let nav = document.createElement('div');
  nav.classList.add('working-report__nav');
  nav.dataset.state = 'initial';

  let navInner = document.createElement('div');
  navInner.classList.add('working-report__nav__inner');
  nav.appendChild(navInner);

  let wrapper = document.querySelector('.working-report__wrapper');
  let sections = wrapper.querySelectorAll('.working-report__section');
  sections.forEach(function (section) {
    let navSection = document.createElement('div');

    navSection.innerHTML = '<span class="label">' + section.querySelector('h2').innerText.replace(/\n/g, ' ') + '</span > <span class="marker"></span>';
    navSection.classList.add('working-report__nav__section');
    navSection.dataset.sectionClass = section.dataset.section;

    navInner.appendChild(navSection);
  });

  let overlay = document.createElement('div');
  overlay.classList.add('overlay');
  nav.appendChild(overlay);

  let toggleMobileNavEl = document.createElement('div');
  toggleMobileNavEl.classList.add('toggle-mobile-nav');
  navInner.appendChild(toggleMobileNavEl);

  const insertReference = wrapper.querySelector('.working-report__section');
  wrapper.insertBefore(nav, insertReference);

  setNavEvents()
}

function setNavEvents() {

  const navRoot = document.querySelector('.working-report__nav');

  // Highlight current section on scroll
  window.addEventListener('scroll', function () {
    highlightCurrentSection(navRoot);
    setNavState(navRoot);
  });

  // Scroll there on clicks
  let navSections = document.querySelectorAll('.working-report__nav__section');
  navSections.forEach(function (s) {
    s.addEventListener('click', function () {
      let sClass = s.dataset.sectionClass;
      let sWrapper = document.querySelector('.working-report__section.' + sClass);
      let sWrapperTop = sWrapper.offsetTop + 24;
      scrollTo(sWrapperTop);
    })
  });

  // Mobile nav toggle
  let navToggleEl = navRoot.querySelector('.toggle-mobile-nav');
  navToggleEl.addEventListener('click', () => {
    navRoot.classList.toggle('expanded');
  })
}

function highlightCurrentSection(navRoot) {
  let s = getCurrentSection(0);
  let n = getCurrentSection(-0.67 * window.innerHeight);

  // highlight in nav
  if (s) {
    let navSection = navRoot.querySelector('[data-section-class="' + s.dataset.section + '"]');
    if (!navSection.classList.contains('current')) {
      wipeCurrentPrevNextClasses();
      navSection.classList.add('current');

      if (navSection.previousElementSibling) {
        navSection.previousElementSibling.classList.add('is-prev');
      }
      if (navSection.nextElementSibling) {
        navSection.nextElementSibling.classList.add('is-next');
      }
    }
  }

  if (window.scrollY > 180) {
  } else {
    wipeCurrentPrevNextClasses();
    let firstSection = navRoot.querySelector('[data-section-class]');
    firstSection.classList.add('is-next');

  }

  // highlight in content
  if (window.pageYOffset <= 0) {
    document.querySelectorAll('.working-report__section').forEach(function (s) {
      s.classList.remove('seen');
    })
  }
  if (n) {
    let section = document.querySelector('.working-report__section.' + n.dataset.section);
    section.classList.add('seen');
  }
}

function setNavState(navRoot) {
  const navTop = navRoot.getBoundingClientRect().top;
  const navHeight = navRoot.offsetHeight;
  const triggerY = navTop + navHeight;

  if (triggerY < 0) {
    if (navRoot.dataset.state != 'compact') {
      navRoot.dataset.state = 'compact';
    }
  } else {
    if (navRoot.dataset.state != 'initial') {
      navRoot.dataset.state = 'initial';
    }
  }
}

function wipeCurrentPrevNextClasses() {
  let willRemoveClasses = document.querySelectorAll('.working-report__nav__section.current, .working-report__nav__section.is-prev, .working-report__nav__section.is-next');
  willRemoveClasses.forEach((el) => {
    el.classList.remove('current');
    el.classList.remove('is-prev');
    el.classList.remove('is-next');
  });
}

function getCurrentSection(offset) {
  let sections = document.querySelectorAll('.working-report__section');
  let sectionsArr = [].slice.call(sections).reverse();

  let currentSection = false;

  for (let section of sectionsArr) {
    if (section.getBoundingClientRect().top + offset - 60 < 0) {
      currentSection = section;
      break;
    }
  }

  return currentSection;

}


function scrollTo(to) {
  let duration = 600;
  const element = document.scrollingElement;
  const start = (element && element.scrollTop) || window.pageYOffset,
    change = to - start,
    increment = 20;
  let currentTime = 0;

  duration = Math.max(240, (Math.sqrt(Math.abs(change)) * 4));

  const animateScroll = function () {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    window.scrollTo(0, val);
    if (currentTime < duration) {
      window.setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}


Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
