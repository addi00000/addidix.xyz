var dots = [],
    mouse = {
        x: 0,
        y: 0
    };

var Dot = function() {
    this.x = 0;
    this.y = 0;
    this.node = (function() {
        var n = document.createElement("div");
        n.className = "trail";
        document.body.appendChild(n);
        return n;
    }());
};

Dot.prototype.draw = function() {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
};

for (var i = 0; i < 12; i++) {
    var d = new Dot();
    dots.push(d);
}

function draw() {
    var x = mouse.x,
        y = mouse.y;
    dots.forEach(function(dot, index, dots) {
        var nextDot = dots[index + 1] || dots[0];
        dot.x = x;
        dot.y = y;
        dot.draw();
        x += (nextDot.x - dot.x) * .6;
        y += (nextDot.y - dot.y) * .6;
    });
}

addEventListener("mousemove", function(event) {
    event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
});

addEventListener("click", function(event) {
    var audio = new Audio('public/sound/click.wav');
    audio.volume = 0.1;
    audio.play();

    dots.forEach(function(dot) {
        dot.node.style.transform = "scale(1.5)";
    });
    setTimeout(function() {
        dots.forEach(function(dot) {
            dot.node.style.transform = "scale(1)";
        });
    }, 100);
});


function animate() {
    draw();
    requestAnimationFrame(animate);
}

animate();