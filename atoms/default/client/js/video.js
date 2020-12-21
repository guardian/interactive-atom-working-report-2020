setupVideo();

function setupVideo() {
  const videoFigure = document.querySelector('.element-atom--media, .element-atom[data-atom-type="media"]');
  videoFigure.classList.add('wr-video');

  if (videoFigure) {
    const videoAtom = videoFigure.querySelector('.youtube-media-atom, .element-youtube .element__inner');
    if (videoFigure && videoAtom) {
      let videoOverlayEl = document.createElement('div');
      videoOverlayEl.classList.add('wr-video__overlay');
      videoOverlayEl.innerHTML = `<a href='https://www.theguardian.com/world/video/2020/dec/21/how-the-guardian-covered-2020-the-year-that-changed-the-world'></a><div class='wr-video__label'><strong>How the Guardian covered 2020</strong>Here are some of the highlights of our journalism</div><div class='wr-video__play'><svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.709 13.166v-1.237L1.149.534.133 1.33v22.437l1.016.706 27.56-11.306z" fill="#FFE500"/></svg></div>`;

      videoAtom.appendChild(videoOverlayEl);
    }
  }


}

// App link notes, if needed
// x-gu://item/mobile-preview.guardianapis.com/uk/items/world/video/2020/dec/21/how-the-guardian-covered-2020-the-year-that-changed-the-world
