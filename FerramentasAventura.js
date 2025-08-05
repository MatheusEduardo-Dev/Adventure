import { Ferramenta } from "./Basicas.js";

export class Lanterna extends Ferramenta {
    #bateria;
    constructor() {
        super("lanterna");
        this.#bateria = 3;
    }

    usar() {
        if (this.#bateria > 0) {
            this.#bateria--;
            return true;
        }
        return false;
    }
}

export class PéDeCabra extends Ferramenta {
    #usos;
    constructor() {
        super("pé_de_cabra");
        this.#usos = 1;
    }

    usar() {
        if (this.#usos > 0) {
            this.#usos--;
            return true;
        }
        return false;
    }
}

export class ArtefatoQuebrado extends Ferramenta {
    constructor() {
        super("artefato_quebrado");
    }

    usar() {
        return true; // Sempre pode ser usado, mas consequências variam
    }
}
