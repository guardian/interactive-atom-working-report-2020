// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

// tagIllustrations();
// fixLoResImage()


// function fixLoResImage() {
//   let immImgs = document.querySelectorAll('.element--immersive img');
//   immImgs.forEach(function (i) {
//     let loSrc = i.getAttribute('src');
//     let hiSrc = loSrc.replace('1000.jpg', '2000.jpg');
//     let hhSrc = loSrc.replace('1000.jpg', '3000.jpg');
//     i.setAttribute('srcset', loSrc + ' 1000w, ' + hiSrc + ' 2000w, ' + hhSrc + ' 3000w');
//   });
// }

// function tagIllustrations() {
//   let allImages = document.querySelectorAll('.element-image');
//   let illustrationIds = [
//     '181a2210176471fda23ea5a0a5e67f2ef5b22634', '12c4d52c647fb04442104e7b793afc4efa15d4ca',
//     'a89e35e11cc4fedd5ad787e2ae456ef100a01a6a'];

//   allImages.forEach(function (i) {
//     if (illustrationIds.indexOf(i.dataset.mediaId) >= 0) {
//       i.classList.add('element--illustration');
//     }
//   });
// }
