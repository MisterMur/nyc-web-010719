function createCharacter() {
  let character = {
    element: document.createElement("img"),
    speed: 15,
    movement: null,
    assets: "assets/character",
    walkEast: function() {
      character.stop();
      character.movement = setInterval(function() {
        let currentPosition = parseInt(character.element.style.left);
        character.element.style.left = currentPosition + 1 + "px";
      }, character.speed);
      character.element.src = `${character.assets}/walkright.gif`;
    },
    stop: function() {
      clearInterval(character.movement);
      character.element.src = `${character.assets}/static.gif`;
    }
  };
  // let characterElement = document.createElement("img"),

  character.element.src = `${character.assets}/static.gif`;
  character.element.style.position = "absolute";
  character.element.style.left = "0px";
  character.element.style.top = "0px";
  character.element.style.width = "50px";
  document.body.appendChild(character.element);
  return character;
}
