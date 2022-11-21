class Dot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.node = (function () {
      var n = document.createElement("div");
      n.className = "trail";
      document.body.appendChild(n);
      return n;
    })();
  }
  draw() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  }
}

class Trail {
  constructor() {
    this.dots = [];
    this.mouse = {
      x: 0,
      y: 0,
      speed: 0,
    };
  }
  init() {
    for (let i = 0; i < 12; i++) {
      let d = new Dot();
      this.dots.push(d);
    }
  }
  draw() {
    let x = this.mouse.x,
      y = this.mouse.y;
    this.dots.forEach((dot, index, dots) => {
      let nextDot = dots[index + 1] || dots[0];
      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.6;
      y += (nextDot.y - dot.y) * 0.6;
    });
  }
  animate() {
    this.draw();
    requestAnimationFrame(this.animate.bind(this));
  }
  addEventListeners() {
    addEventListener("mousemove", (event) => {
      event.preventDefault();
      this.mouse.x += (event.pageX - this.mouse.x) * 0.2;
      this.mouse.y += (event.pageY - this.mouse.y) * 0.2;
    });
  }
}

const trail = new Trail();
trail.init();
trail.animate();
trail.addEventListeners();
