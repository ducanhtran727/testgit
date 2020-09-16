class book extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(
      document.getElementById("book").content.cloneNode(true)
    );
    this.$container = this._shadowRoot.querySelector("#container");
    this.$content = this._shadowRoot.querySelector("#nameBook");
    this.$displayName = this._shadowRoot.querySelector("#displayName");
  }
  static get observedAttributes() {
    return ["tensach","tacgia"];
  }
  set tensach(newval) {
    this.setAttribute("tensach", newval);
  }
  set tacgia(newval) {
    this.setAttribute("tacgia", newval);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === "tensach") {
      this.$content.innerHTML = newVal;
    }
    if(name === "tacgia"){
      this.$displayName.innerHTML = newVal;
    }
  }
}
customElements.define("my-book", book);
