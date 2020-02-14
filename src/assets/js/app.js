import $ from 'jquery';
import 'what-input';
import anime from 'animejs/lib/anime.es.js';

// Foundation JS relies on a global variable. In ES6, all imports are hoisted
// to the top of the file so if we used `import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');
require('particles.js')

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
particlesJS.load('particles-js', '/assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

anime({
  targets: '#h-top',
  keyframes: [
    {translateY: '-5vh'},
    {translateY: '0vh'},
  ],
  duration:12000, 
  loop: true,
  easing: 'easeInOutSine',
  delay: anime.stagger(1000)
});
$(document).foundation();
