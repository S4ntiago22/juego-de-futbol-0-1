class Form { 
    constructor() {
        this.input = createInput("").attribute("placeholder", "ingresa tu nombre");
        this.playButton = createButton("jugar");
        this.greeting = createElement("h2");
    }

    setElementsPosition() {
        this.input.position(width / 2 - 110, height / 2 - 80);
        this.playButton.position(width / 2 - 90, height / 2 - 20);
        this.greeting.position(width / 2 - 300, height / 2 - 100);
    }

    setElementsStyle() {
        this.input.class("customInput");
        this.playButton.class("customButton");
        this.greeting.class("greeting");
    }

    hide() {
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }

    handleMousePressed() {
        this.playButton.mousePressed(() => {
            this.input.hide();
            this.playButton.hide();
            var message =`
            Hola ${this.input.value()}
            </bR>espera a que otro jugador se una....`;
            this.greeting.html(message);
         }); 
     }

     display() {
        this.setElementsPosition();
        this.setElementsStyle();
     }
}