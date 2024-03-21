---
title: PhotoSwipe
templateEngineOverride: md
translationKey: "photoSwipe"
eleventyNavigation:
  key: PhotoSwipe
  parent: Eleventy
  order: 13
---
## 1. Installation
```hmtl
npm install photoswipe
```
## 2. PhotoSwipe CSS a JS files
The following files need to be copied from `node_modules/photoswipe/dist` to the Eleventy project `/src/assests/js/`:
- photoswipe.css
- photoswipe.esm.js
- photoswipe-lightbox.esm.js

## 3. Create index.js with initialization
Creation of file `/src/assets/js/index.js`:
```js
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; // adjust path to your own
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js') // adjust path to your own
});
lightbox.init();
```

## 4. Basic layout
Adjust basic layout `/src/_layouts/base.njk`:
```html
<!DOCTYPE html>
<html lang="cs">
  <head>
    ...
    <link rel="stylesheet" href="/assets/css/photoswipe.css">  <!-- adjust path to your own -->
    ...
  </head>
  <body>
    <main>
       ...
    </main>
    <script type="module" src="/assets/js/index.js"></script> <!-- adjust path to your own -->
  </body>
</html>
```

## 3. Usage
```html
<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>
```
Result:

<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>

## 4. Sources
- [PhotoSwipe documentation](https://photoswipe.com/getting-started/)