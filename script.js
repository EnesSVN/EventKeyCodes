const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  console.log(event);
  insert.innerHTML = `
  <div class="key">
    ${event.key === " " ? "Space" : event.key}
    <small>Event.key</small>
    </div>

    <div class="key">
    ${event.keyCode}
        <small>Event.keyCode</small>
    </div>

    <div class="key">
    ${event.code}
        <small>Event.code</small>
    </div>`;
});
