import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; // adjust path to your own
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js') // adjust path to your own
});
lightbox.init();