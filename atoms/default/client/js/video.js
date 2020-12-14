setupVideo();

function setupVideo() {
  const videoFigure = document.querySelector('.element-atom--media');
  videoFigure.classList.add('wr-video');

  const videoAtom = document.querySelector('.youtube-media-atom');


  let videoOverlayEl = document.createElement('div');
  videoOverlayEl.classList.add('wr-video__overlay');
  videoOverlayEl.innerHTML = `<div class='wr-video__label'><strong>The Guardian's best journalism across the year</strong>Lorem insight dolor sit into the workings of the and Australia, over the last year</div><div class='wr-video__play'><svg width="29" height="25" viewBox="0 0 29 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M28.709 13.166v-1.237L1.149.534.133 1.33v22.437l1.016.706 27.56-11.306z" fill="#FFE500"/></svg></div>`;

  videoAtom.appendChild(videoOverlayEl);

}
