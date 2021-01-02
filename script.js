var btDuvida = document.querySelector('.btduvida');
var modalBg = document.querySelector('.modal_bg');
var modalClose = document.querySelector(".modal_close");

btDuvida.addEventListener("click", function(){
  modalBg.classList.add("modal_bg_active")
    });
    modalClose.addEventListener("click", function(){
      modalBg.classList.remove("modal_bg_active")
        });