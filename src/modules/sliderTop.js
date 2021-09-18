const sliderTop = () => {

   const slider = document.querySelector('.top__slider');
   const slideItem = slider.querySelectorAll('.top__slider-item');
   const sliderDots = slider.querySelector('.top__slider-dots');

   let slideLenght = slideItem.length - 1;

   for(let i = 0; i <= slideLenght; i++){
      let createli = document.createElement('li');
      sliderDots.appendChild(createli);
      createli.classList.add('top__slider-dot');
   };

   const dot = document.querySelectorAll('.top__slider-dot');
   dot[0].classList.add('dot-active');

   let currentSlide = 0,
   interval;

   const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
   };

   const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
   }

   const autoPlaySLide = ()=>{
      prevSlide(slideItem, currentSlide, 'top__slider-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slideItem.length){
         currentSlide = 0;
      }
      nextSlide(slideItem, currentSlide, 'top__slider-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
   };

   const startSlide = (time = 3000)=>{
      interval = setInterval(autoPlaySLide, time);
   };
   const stopSlide = ()=>{
      clearInterval(interval);
   };

   slider.addEventListener('click', (event)=>{
      event.preventDefault();
      let target = event.target;

      if(!target.matches('.top__slider-dot')){
         return;
      }

      prevSlide(slideItem, currentSlide, 'top__slider-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('.top__slider-dot')){
         dot.forEach((elem, index) => {
            if(elem === target){
               currentSlide = index;
            }
         });
      }

      nextSlide(slideItem, currentSlide, 'top__slider-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
   });

   slider.addEventListener('mouseover', (event)=>{
      if(event.target.matches('.top__slider-dot')){
         stopSlide();
      }
   });
   slider.addEventListener('mouseout', (event)=>{
      if(event.target.matches('.top__slider-dot')){
         startSlide();
      }
   });

   startSlide(2000);

};

export default sliderTop;

// const sliderTop = () => {

//    const slider = document.querySelector('.top__slider');
//    const slideItem = slider.querySelectorAll('.top__slider-item');
//    const sliderDots = slider.querySelector('.top__slider-dots');

//    let slideLenght = slideItem.length - 1;

//    for(let i = 0; i <= slideLenght; i++){
//       let createli = document.createElement('li');
//       sliderDots.appendChild(createli);
//       createli.classList.add('top__slider-dot');
//    };

//    const dot = document.querySelectorAll('.top__slider-dot');
//    dot[0].classList.add('dot-active');


//    let currentSlide = 0,
//       interval = setInterval;

//    const prevSlide = (elem, index, strClass)=> {
//       elem[index].classList.remove(strClass);
//    };
//    const nextSlide = (elem, index, strClass)=> {
//       elem[index].classList.add(strClass);
//    };

//    const autoPlaySLide = ()=>{
//       prevSlide(slideItem, currentSlide, 'top__slider-item-active');
//       prevSlide(dot, currentSlide, 'dot-active');
//       currentSlide++;
//       if (currentSlide >= slideItem.length){
//          currentSlide = 0;
//       }
//       nextSlide(slideItem, currentSlide, 'top__slider-item-active');
//       nextSlide(dot, currentSlide, 'dot-active');
//    };

//    const startSlide = (time = 3000)=>{
//       interval = setInterval(autoPlaySLide, time);
//    };
//    const stopSlide = ()=>{
//       clearInterval(interval);
//    };

//    slider.addEventListener('click', (event) => {
//       event.preventDefault();

//       if (!event.target.matches('.top__slider-dot')){
//          return;
//       }

//       prevSlide(slideItem, currentSlide, 'top__slider-item-active');
//       prevSlide(dot, currentSlide, 'dot-active');

//       if (event.target.matches('.top__slider-dot')){
//          dot.forEach((elem, index) => {
//             if(elem === event.target){
//                currentSlide = index;
//             }
//          });
//       }

//       if (currentSlide >= slideItem.length){
//          currentSlide = 0;
//       }

//       if (currentSlide < 0){
//          currentSlide = slideItem.length - 1;
//       }

//       nextSlide(slideItem, currentSlide, 'top__slider-item-active');
//       nextSlide(dot, currentSlide, 'dot-active');
//    });

//    slider.addEventListener('mouseover', (event)=>{
//       if(event.target.matches('.dot-active')){
//          stopSlide();
//       }
//    });
//    slider.addEventListener('mouseout', (event)=>{
//       if(event.target.matches('.dot-active')){
//          startSlide();
//       }
//    });

//    startSlide(3000);

// };

// export default sliderTop;