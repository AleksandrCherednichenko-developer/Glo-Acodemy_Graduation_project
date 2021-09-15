const popupMenu = () => {

   const callbackBtn = document.querySelectorAll('.callback-btn');
   const modalCallback = document.querySelector('.modal-callback');
   const modalOverlay = document.querySelector('.modal-overlay');
   const modalClose = document.querySelector('.modal-close img');
   const questSectionBtn = document.querySelector('.quest-section .button');
   const services = document.querySelectorAll('.slide div.element');

   const openPopup = () => {
      modalCallback.style.display = 'block';
      modalOverlay.style.display = 'block';
      // let start = Date.now();
      // let timer = setInterval(() => {
      //    let timePassed = Date.now() - start;
      //    modalCallback.style.top = timePassed / 2 + 'px';
      //    if (timePassed > 500) clearInterval(timer);
      // }, 1.5);
   };
   const closePopup = () => {
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
   };

   callbackBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
         openPopup();
      });
   });

   services.forEach((elem) => {
      elem.addEventListener('click', () => {
         openPopup();
      });
   });

   document.addEventListener('click', (event) => {
      if (event.target === modalClose){
         closePopup();
      } else if(event.target === modalOverlay){
         closePopup();
      } else if(event.target === questSectionBtn){
         openPopup();
      }
   });

};

export default popupMenu;