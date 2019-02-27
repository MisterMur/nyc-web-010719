function Character() {
  this.element = document.createElement("img");
  this.speed = 15;
  this.movement = null;
  this.characterAssets = "assets/character";
  this.element.src = `${this.characterAssets}/static.gif`;
  this.element.style.position = "absolute";
  this.element.style.left = "0px";
  this.element.style.top = "0px";
  this.element.style.width = "50px";
  document.body.appendChild(this.element);
}

Character.prototype = {
  walkEast: function() {
    this.movement = setInterval(
      function() {
        let currentPosition = parseInt(this.element.style.left);
        this.element.style.left = currentPosition + 1 + "px";
      }.bind(this),
      this.speed
    );
    this.element.src = `${this.characterAssets}/walkright.gif`;
  },
  stop: function() {
    clearInterval(this.movement);
    this.element.src = `${this.characterAssets}/static.gif`;
  }
};
