class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
 
        `;
    }
}

customElements.define('custom-footer', CustomFooter);