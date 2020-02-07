let dragHandler = {
  lastClientX: 0,

  start: function(e) {
    if (e.button == 0) {
      window.addEventListener("mousemove", dragHandler.drag);

      dragHandler.lastClientX = e.clientX;
      e.preventDefault();
    }
  },

  end: function(e) {
    if (e.button == 0) {
      window.removeEventListener("mousemove", dragHandler.drag);
    }
  },

  drag: function(e) {
    var delta = e.clientX - dragHandler.lastClientX;

    window.scrollTo(window.scrollX - delta, window.scrollY);

    dragHandler.lastClientX = e.clientX;

    e.preventDefault();
  }
};
document.addEventListener("mousedown", dragHandler.start);
console.log("kgjbdsogbsogbuo");
document.addEventListener("mouseup", dragHandler.end);
