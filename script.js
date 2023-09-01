let preloader = Document.getElementByID('#preloader');
if (preloader) {
  setTimeout(() => {
    preloader.remove()
  }, 3000);
}