(function() {
  var a, i, len, magicLine, ref,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  magicLine = (function() {
    function magicLine(menu) {
      this.menu = menu;
      this.update = bind(this.update, this);
      if (!this.menu) {
        return;
      }
      this.menu.classList.add('has-magic-line');
      this.line = document.createElement('li');
      this.line.classList.add('magic-line');
      this.menu.appendChild(this.line);
      this.update();
      window.addEventListener('resize', this.update);
    }

    magicLine.prototype.update = function() {
      var el;
      if (!(el = document.querySelector('.active'))) {
        return;
      }
      this.line.style.transform = "translateY( " + (el.offsetTop || 0) + "px )";
      this.line.style.height = (el.offsetHeight || 0) + "px";
      return this.line.style.backgroundColor = window.getComputedStyle(el).getPropertyValue('background-color');
    };

    return magicLine;

  })();

  window.magicLine = new magicLine(document.querySelector('.menu'));

  ref = document.querySelectorAll('.menu-item a');
  for (i = 0, len = ref.length; i < len; i++) {if (window.CP.shouldStopExecution(1)){break;}
    a = ref[i];
    a.addEventListener('click', function(e) {
      var ref1;
      e.preventDefault();
      if ((ref1 = document.querySelector('.menu-item.active')) != null) {
        ref1.classList.remove('active');
      }
      this.parentNode.classList.add('active');
      return window.magicLine.update();
    });
  }
window.CP.exitedLoop(1);


}).call(this);
