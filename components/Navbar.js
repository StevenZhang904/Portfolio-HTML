export  function renderNavbar(page, keys) {
  return `
    <nav class="flex-container">
      <ul style="list-style-type:disc">
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${
          keys[0]
        }">"${keys[0]}"</a>
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${
          keys[1]
        }">"${keys[1]}"</a>
        <a class="animate__animated animate__bounce animate__repeat-5" href="#${
          keys[2]
        }">"${keys[2]}"</a>
      </ul>
    </nav>
    `;
}