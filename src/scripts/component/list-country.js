class ListCountry extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set country(country) {
        this._country = country;
        this.render();
    }

    connectedCallback(){
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
            .card {
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 100%;
                border-radius: 5px;
                padding:5px;
              }
              
              .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
              }

              .covid-img{
                  width: auto;
              }
            </style>
           <div class="card">
               <img class="covid-img" src="${this._country.image}" alt="Fan Art">
               <p>Confirmed : ${this._country.confirmed.value}</p>
               <p>Recovered: ${this._country.recovered.value}</p>
               <p>Death : ${this._country.deaths.value}</p>
           </div>`;
    }
}

customElements.define("list-country", ListCountry);