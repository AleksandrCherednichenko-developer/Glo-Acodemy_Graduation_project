const scrollUp = ()=>{

   const upBtn = document.querySelector('.up');

   function trackScroll() {
      const scrolled = window.pageYOffset;

      if (scrolled > 520) {
         upBtn.style.display = 'block';
      } else {
         upBtn.style.display = 'none';
      }
   }

   function backToTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -60);
         setTimeout(backToTop, 0);
      }
   }

   window.addEventListener('scroll', trackScroll);
   upBtn.addEventListener('click', backToTop);

};

export default scrollUp;