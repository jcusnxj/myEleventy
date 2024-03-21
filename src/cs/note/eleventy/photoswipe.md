---
title: PhotoSwipe
templateEngineOverride: md
translationKey: "photoSwipe"
eleventyNavigation:
  key: PhotoSwipe
  parent: Eleventy
  order: 13
---
## 1. Instalace
```hmtl
npm install photoswipe
```
## 2. PhotoSwipe CSS a JS soubory
Následující soubory je potřeba zkopírovat z `node_modules/photoswipe/dist` do Eleventy projektu `/src/assests/js/`:
- photoswipe.css
- photoswipe.esm.js
- photoswipe-lightbox.esm.js

## 3. Vytvořit index.js s inicializací
Vytvoření souboru `/src/assets/js/index.js`:
```js
import PhotoSwipeLightbox from '/assets/js/photoswipe-lightbox.esm.js'; // adjust path to your own
const lightbox = new PhotoSwipeLightbox({
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('/assets/js/photoswipe.esm.js') // adjust path to your own
});
lightbox.init();
```

## 4. Základní layout
Upravit základní layout `/src/_layouts/base.njk`:
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

## 3. Použití
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
Výsledek:

<div class="pswp-gallery" id="my-gallery">
  <a href="https://live.staticflickr.com/65535/51357005462_53d25f0884_k.jpg" 
    data-pswp-width="2048" 
    data-pswp-height="1532" 
    target="_blank">
    <img src="/assets/img/sample-picture.jpg" alt="" />
  </a>
</div>

## 4. Zdroje
- [PhotoSwipe dokumentace](https://photoswipe.com/getting-started/)