let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #f3cd44 ">Mi primera pagina web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
