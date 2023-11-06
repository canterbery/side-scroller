import { InputHandler } from "./src/InputHandler.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 800;
  canvas.height = 720;

  const inputHandler = new InputHandler();
});
