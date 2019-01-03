
class Pakiman {

    constructor(name, life, attack) {
        this.name = name;
        this.life = life;
        this.attack = attack;
        this.image = new Image();
        this.image.src = images[this.name];
    }

    speak() {
        alert(this.name);
    }

    show() {
        document.body.appendChild(this.image);
        // document.write("<p>");
        document.write("<br/><strong>" + this.name + "</strong><br/>");
        document.write("Life: " + this.life + "<br/>");
        document.write("Attack: " + this.attack + "<hr/>");


        // document.write("</p>");
    }
}