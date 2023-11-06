const KEYS = new Set(["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]);

class InputHandler {
  constructor() {
    this.keys = [];
    window.addEventListener("keydown", (e) => {
      if (KEYS.has(e.key) && this.keys.indexOf(e.key) === -1) {
        this.keys.push(e.key);
      }
    });
    window.addEventListener("keyup", (e) => {
      if (KEYS.has(e.key)) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });
  }
}

export { InputHandler };
