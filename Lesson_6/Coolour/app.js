document.body.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() !== "space") return;

  const sectionBlocks = document.querySelectorAll(".col");
  sectionBlocks.forEach((block) => {
    const isLocked = !!block.querySelector(".fa-lock");
    if (isLocked) return;
    const color = chroma.random();
    block.style.backgroundColor = color.toString();
    const colorTextElement = block.querySelector("#colorText");
    colorTextElement.textContent = color.toString();
    colorTextElement.style.color = color.luminance() > 0.5 ? "black" : "white";
  });
});

document.body.addEventListener("click", (event) => {
  const elementType = event.target.dataset.type;
  if (!elementType) return;

  switch (elementType) {
    case "lock":
      const targetTag = event.target.tagName;
      let icon;
      if (targetTag === "BUTTON") {
        icon = event.target.children[0];
      } else {
        icon = event.target;
      }
      icon.classList.toggle("fa-lock");
      icon.classList.toggle("fa-lock-open");
      break;
    case "copy":
      const colorText = event.target.textContent;
      navigator.clipboard.writeText(colorText);
      const popup = document.querySelector(".popup");
      Object.assign(popup.style, {
        display: "flex",
        top: `${event.clientY + 15}px`,
        left: `${event.clientX - 125}px`,
      });
      setTimeout(() => {
        Object.assign(popup.style, {
          display: "none",
        });
      }, 3000);
      break;
  }
});
