class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu">
        <h1><a href="/">Restoku Catalog</a></h1>
        <button class="menu-button" title="off canvas button">
          <i class="fas fa-times"></i>
          <i class="fas fa-bars"></i>
        </button>
        <ul class="menu-list">
          <li><a href="/">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li>
            <a href="https://github.com/alipdeveloper" target="_blank"
              >About Us</a
            >
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
