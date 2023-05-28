class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <picture>
        <source media="(max-width: 600px)" srcset="./images/heros/hero-image_4-small.jpg">
        <img src="./images/heros/hero-image_4-large.jpg"
          alt="Hero Image Restoku">
      </picture>        
      <div class="inner">
          <h1 class="title">Restoku Catalog</h1>
          <p class="subtitle">Temukan resotran terbaik kamu disini!</p>
        </div>
      </div>
    `;
  }
}

customElements.define("app-hero", AppHero);
