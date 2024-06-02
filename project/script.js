document.addEventListener('DOMContentLoaded', function () {
    const clickableContent = document.querySelectorAll('.overlay-content.clickable');
  
    clickableContent.forEach(item => {
      item.addEventListener('click', function () {
        const newImgSrc = this.getAttribute('data-img');
        const mainImage = document.querySelector('.main-image');
        mainImage.setAttribute('src', newImgSrc);
      });
    });
  });
  