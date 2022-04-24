class Effects {
   events() {
      document.querySelector('.sidebar i').addEventListener('mouseover', this.sidebaricon);
      document.querySelector('.sidebar i').addEventListener('mouseout', this.removeicon);
      this.createaddc();
   };
   sidebaricon() {
      document.querySelector('.fa-align-justify').classList.remove("fa-align-justify");
      document.querySelector('.sidebar i').classList.add("fa-indent");
      document.querySelector('.sidebar i').style.transition= '0.9s all ease';
      document.querySelector('.sidebar i').style.color='#EE47D8';
      document.querySelector('.sidebar i').style.cursor='pointer';
   }
   removeicon() {
      document.querySelector('.fa-indent').classList.remove("fa-indent");
      document.querySelector('.sidebar i').classList.add("fa-align-justify");
      document.querySelector('.sidebar i').style.color='white';
   };
   createaddc() {
      let button = document.querySelectorAll('.fav');
      for(let i = 0; i <= button.length; i++) {
         button[i].innerHTML= `<i class="fa-solid fa-heart"></i>`;
      }
   };
};
var effects = new Effects;