class Character {
  constructor() {
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

  walkEast() {
    console.log("first", this);
    this.movement = setInterval(
      function() {
        console.log("second", this);
        let currentPosition = parseInt(this.element.style.left);
        this.element.style.left = currentPosition + 1 + "px";
      }.bind(this),
      this.speed
    );
    this.element.src = `${this.characterAssets}/walkright.gif`;
  }

  stop() {
    clearInterval(this.movement);
    this.element.src = `${this.characterAssets}/static.gif`;
  }

  static saySomething() {
    return "hello";
  }
}

Character.classVar = "class variable";
