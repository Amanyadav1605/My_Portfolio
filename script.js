new Typed(".typing", {
strings: [
"Java Developer",
"Open Source Learner",
"Web Developer",
"Problem Solver"
],
typeSpeed: 80,
backSpeed: 50,
loop: true
});
 
function openCert(img){
  certModal.style.display="block";
  certImage.src=img;
}

function closeCert(){
  certModal.style.display="none";
}

function showTab(id){

  document.querySelectorAll('.tab-content')
  .forEach(x=>x.classList.remove('active'));

  document.querySelectorAll('.tab')
  .forEach(x=>x.classList.remove('active'));

  document.getElementById(id)
  .classList.add('active');

  event.target.classList.add('active');
}