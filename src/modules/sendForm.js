const sendForm = () => {

   const errorMessage = 'Что то пошло не так...',
         loadMessage = 'Загрузка...',
         successMessage = 'Спасибо! Мы скоро свами свяжимся!',
         notification = 'Поля не должны быть пустыми',
         incorrectValue = 'Вы ввели не верные значения';
         nameError = 'Поле с именем должно содержать больше 2х символов',
         phoneError = 'Поле с телефоном должно содержать минимум 7 цифр';

   const userForm = document.querySelector('.form-callback'),
         userInput = userForm.querySelectorAll('input'),
         userName = userInput[0],
         userPhone = userInput[1];

   const statusMessage = document.createElement('div');

   // создание валидации для формы
   userName.addEventListener('input', ()=> {
      userName.value = userName.value.replace(/[^а-яё]/ig,'');
   });

   userPhone.addEventListener('click', ()=> {
      let keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         let pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         let matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i);
         }
         let reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                  return "\\d{1," + a.length + "}";
            }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
         if (event.type == "blur" && this.value.length < 5)  this.value = "";
      }
      userPhone.addEventListener("input", mask, false);
      userPhone.addEventListener("focus", mask, false);
      userPhone.addEventListener("blur", mask, false);
      userPhone.addEventListener("keydown", mask, false);
   });

   userName.onblur = ()=> {
      if (userName.value.length < 2){
         userName.style.boxShadow = '0 0 15px red';
         userForm.appendChild(statusMessage);
         statusMessage.textContent = nameError;
      } else {
         userName.style.boxShadow = 'none';
         statusMessage.remove();
      }

      let correctUserName;
      if (/  +/.test(userName.value)) {
         correctUserName = userName.value.replace(/  +/g, ' ').replace(/^\s+/g, '').replace(/\s*$/,'');
         userName.value = correctUserName;
      }
      correctUserName = userName.value.split(" ").map(e => e[0].toUpperCase() + e.slice(1)).join(" ");
      userName.value = correctUserName;
   };

   userPhone.onblur = ()=> {
      if (userPhone.value.length < 12){
         userPhone.style.boxShadow = '0 0 15px red';
         userForm.appendChild(statusMessage);
         statusMessage.textContent = phoneError;
      } else {
         userPhone.style.boxShadow = 'none';
         statusMessage.remove();
      }
   };


   const closePopup = () => {
      const modalCallback = document.querySelector('.modal-callback');
      const modalOverlay = document.querySelector('.modal-overlay');
      modalCallback.style.display = 'none';
      modalOverlay.style.display = 'none';
      userName.value = '';
      userPhone.value = '';
   };

   userForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (userName.value === '' || userPhone.value === ''){
         userForm.appendChild(statusMessage);
         statusMessage.textContent = notification;
         return;
      }

      if (userName.value.length < 2 ||
         userPhone.value.length < 12 ){
         userForm.appendChild(statusMessage);
         statusMessage.textContent = incorrectValue;
         return;
      }

      userForm.appendChild(statusMessage);

      statusMessage.textContent = loadMessage;

      const formData = new FormData(userForm);
      let body = {};
      for (let val of formData.entries()){
         body[val[0]] = val[1];
      }

      postData(body)
      .then((response)=>{
         if(response.status !== 200){
            throw new Error('status network not 200');
         }
         statusMessage.textContent = successMessage;
         userForm.reset();
      })
      .catch((error)=> {
         statusMessage.textContent = errorMessage;
         console.error(error);
      });
      setTimeout(()=> {
         statusMessage.remove();
         closePopup();
      }, 5000);
   });

   const postData = (body) => {
      return fetch('./server.php',
      {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(body),
      });
   };

};

export default sendForm;