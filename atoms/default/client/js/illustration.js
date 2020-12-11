tagIllustrations();


function fixLoResImage() {
  let immImgs = document.querySelectorAll('.element--illustration.element--immersive img');
  immImgs.forEach(function (i) {
    let loSrc = i.getAttribute('src');
    let hiSrc = loSrc.replace('1000.jpg', '2000.jpg');
    let hhSrc = loSrc.replace('1000.jpg', '3000.jpg');
    i.setAttribute('srcset', loSrc + ' 1000w, ' + hiSrc + ' 2000w, ' + hhSrc + ' 3000w');
  });
}

function tagIllustrations() {
  let allImages = document.querySelectorAll('.element-image');
  let illustrationIds = [
    '89f23377c588def5c929386c1d21dd9a26151ea8', 'e7685488233832097fff30667cef232a293e6583',
    'f772a4c2715e003c9675bd2c7d686d803767e397', '7fa80a94c5cdedaff47b2b399d17a9624c52e775', 'e046d4802ca16d9df018f8b935151f0726890cab', 'b844cab76b0d2b84670a6e68f72c8609c539be35', 'c8898c5ad956ec61f290d3acc14da7985d3b2d7c', 'b141ecc9f621b93e8ee9d1ed3fad3e16ba2a64a7'];

  allImages.forEach(function (i) {
    if (illustrationIds.indexOf(i.dataset.mediaId) >= 0) {
      i.classList.add('element--illustration');
    }
  });

  fixLoResImage();
}
