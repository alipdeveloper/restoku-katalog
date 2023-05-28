class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <p>
      <p>&copy; Copyright 2023 &dash; Restoku Catalog</p>
    </p>
    `;
  }
}

customElements.define("app-footer", AppFooter);
