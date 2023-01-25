import "./css/styles.css";

import a from "./js/a";
import b from "./js/b";

console.log("Hello frpom WP SRC");
console.log(a);
console.log(b);

class User {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getInfo() {
        console.log(this.#name);
    }
}

let anna = new User("Anna");
let elena = new User("Elena");

anna.getInfo();
elena.getInfo();
