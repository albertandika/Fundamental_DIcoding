class SelectCountry extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set select(select) {
        this._select = select;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = ``;
        const selectC = document.createElement("select")
        selectC.setAttribute('id', 'select-country')
        selectC.classList.add('form-group')
        this.shadowDOM.appendChild(selectC)
        this._select.forEach(res => {
            // this.shadowDOM.innerHTML += club.name
            const item = document.createElement("option");
            item.value = res.name;
            item.innerHTML = res.name
            selectC.add(item);
        })
        
    }
}

customElements.define("select-country", SelectCountry);