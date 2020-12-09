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
    '8ad4f4bcb7e68e6c031a7accaf7a1169b68a0af1', 'e3d3d261d65a8134bf86e6e27022398b79575d91',
    'e029577de361155527ef7008e1e4b66b64702340', '069ffeefc7b4b5c0da3a6f0f9b93b39468d76283', 'bcdb5a042e6a6bdb5b7e98af2f8ee999b0c62a2e', 'ed9ad00962d5dc73a53ea7db08070782cdc96279', 'f27f1c486db61feb5799cbfef29ecfcee7e07f47', '3b4b6f1725fe7004fe68c0e30fa1562ec1177bba'];

  allImages.forEach(function (i) {
    if (illustrationIds.indexOf(i.dataset.mediaId) >= 0) {
      i.classList.add('element--illustration');
    }
  });

  fixLoResImage();
}
