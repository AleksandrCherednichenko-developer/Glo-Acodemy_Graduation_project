const accordionMenu = () => {

   const accordeon = document.querySelector('.accordeon');
   const accordeonElem = accordeon.querySelectorAll('.element');
   const accordeonTitle = accordeon.querySelectorAll('.element .title');
   const accordeonContent = accordeon.querySelectorAll('.element-content');


   accordeonTitle.forEach((elem) => {
      elem.addEventListener('click', ()=>{
         const parent = elem.parentNode;
         const content = parent.querySelector('.element-content');

         if (parent.classList.contains('active')){
            parent.classList.remove('active');
            content.style.display = 'none';
         } else {
            accordeonElem.forEach((child) => {
               child.classList.remove('active');
               accordeonContent.forEach((elem) => {
                  elem.style.display = 'none';
               });
            });
            parent.classList.add('active');
            content.style.display = 'block';
         }
      });
   });

};

export default accordionMenu;