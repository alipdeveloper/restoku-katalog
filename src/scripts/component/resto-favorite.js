class RestoFavorite extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>
      <span class="title-content">Restoran Favorit</span>
    </h2>

    <div id="resto-list" class="row"></div>
    `;
  }
}

customElements.define("resto-favorite", RestoFavorite);
