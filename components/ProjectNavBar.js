export  function renderProjectNavbar(keys) {
  return `
    <nav class="flex-container">
      <ul style="list-style-type:disc">
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${keys[4]}">"${keys[4]}"</a>
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${keys[5]}">"${keys[5]}"</a>
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${keys[6]}">"${keys[6]}"</a>
      </ul>
    </nav>
    `;
}