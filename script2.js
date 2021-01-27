const instance = new Typewriter('#typewriter', {
  loop: true
});

instance.typeString("Hello World!")
  .pauseFor(1000)
  .deleteAll()
  .typeString('I am Aristides Molina.')
  .pauseFor(1000)
  .deleteChars(20)
  .typeString('want to be<br>part of your company.')
  .pauseFor(1000)
  .deleteChars(31)
  .typeString('love programming and<br>I am available to work.')
  .pauseFor(1000)
  .deleteAll()
  .typeString('Check out my work at<br>github.com/aristides1000')
  .pauseFor(1000)
  .deleteAll()
  .start();