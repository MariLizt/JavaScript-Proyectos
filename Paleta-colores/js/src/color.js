color.value = storage;

setColor();

color.addEventListener("input", setColor);
color.addEventListener("change", () => saveColor(color.value));