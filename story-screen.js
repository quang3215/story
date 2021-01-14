class StoryScreen extends HTMLElement {
    constructor() {
        super()
        this._shadowRoot = this.attachShadow({ mode: 'open' })
        this._shadowRoot.innerHTML = ` 
        <style>
        .container{
            height: 100vh;
            width: 100%;
            margin:auto;
            text-align: center;
            background-color:rgba(0, 255, 170, 0.37);
             padding-top: 2%;
        }
        #story{
            color: #ff1100;
        }
    </style>
    <div class="container">
        <div id="story"><h1>STORY</h1></div>
        <div>Hello  ${firebase.auth().currentUser.displayName} </div>
    </div>`


    }
}

window.customElements.define('story-screen', StoryScreen)