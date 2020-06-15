class TimeNow extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set time(time) {
        this._time = time;
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
                border-radius: 5px;
                padding:5px;
                display: block;
                position: absolute;
                top: 10px;
                z-index: 1000;
                background-color: aqua;
                right: 10px;
              }
            </style>
           <div class="card">
           ${this._time}
           </div>`;
    }
}

customElements.define("time-now", TimeNow);