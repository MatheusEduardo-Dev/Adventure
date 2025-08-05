import { Objeto, Ferramenta } from "./Basicas.js";
import { Lanterna, PéDeCabra, ArtefatoQuebrado } from "./FerramentasAventura.js";

export class PortaSecreta extends Objeto {
    constructor() {
        super("porta_secreta", "Há uma porta trancada, quase invisível", "A porta secreta está aberta.");
    }

    usar(ferramenta) {
        if (ferramenta instanceof PéDeCabra && ferramenta.usar()) {
            this.acaoOk = true;
            return true;
        }
        return false;
    }
}

export class EstanteMaldita extends Objeto {
    constructor() {
        super("estante_maldita", "Uma estante emite energia estranha", "A estante liberou uma maldição!");
    }

    usar(ferramenta) {
        if (ferramenta instanceof ArtefatoQuebrado) {
            this.acaoOk = true;
            this.acaoPerigosa = true;
            return true;
        }
        return false;
    }
}

export class CofreMisterioso extends Objeto {
    constructor() {
        super("cofre", "Um cofre antigo e selado", "O cofre foi aberto e o grimório está dentro!");
    }

    usar(ferramenta) {
        if (ferramenta instanceof Lanterna && ferramenta.usar()) {
            this.acaoOk = true;
            return true;
        }
        return false;
    }
}
