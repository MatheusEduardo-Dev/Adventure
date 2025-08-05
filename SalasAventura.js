import { Sala, Engine } from "./Basicas.js";
import { Lanterna, PéDeCabra, ArtefatoQuebrado } from "./FerramentasAventura.js";
import { PortaSecreta, EstanteMaldita, CofreMisterioso } from "./ObjetosAventura.js";

export class Entrada extends Sala {
    constructor(engine) {
        super("Entrada", engine);
        this.ferramentas.set("lanterna", new Lanterna());
    }
}

export class Biblioteca extends Sala {
    constructor(engine) {
        super("Biblioteca", engine);
        this.objetos.set("estante_maldita", new EstanteMaldita());
        this.ferramentas.set("artefato_quebrado", new ArtefatoQuebrado());
    }

    usa(ferramenta, objeto) {
        if (!this.engine.mochila.tem(ferramenta) || !this.objetos.has(objeto)) return false;
        const alvo = this.objetos.get(objeto);
        const item = this.engine.mochila.pega(ferramenta);
        const resultado = alvo.usar(item);
        if (alvo instanceof EstanteMaldita && resultado) {
            this.engine.indicaFimDeJogo(); // derrota
            console.log("Você liberou a maldição e morreu!");
        }
        return resultado;
    }
}

export class Corredor extends Sala {
    constructor(engine) {
        super("Corredor", engine);
        this.ferramentas.set("pé_de_cabra", new PéDeCabra());
    }
}

export class SalaSecreta extends Sala {
    constructor(engine) {
        super("Sala_Secreta", engine);
        this.objetos.set("porta_secreta", new PortaSecreta());
    }

    usa(ferramenta, objeto) {
        if (!this.engine.mochila.tem(ferramenta) || !this.objetos.has(objeto)) return false;
        return this.objetos.get(objeto).usar(this.engine.mochila.pega(ferramenta));
    }
}

export class Tesouro extends Sala {
    constructor(engine) {
        super("Sala_do_Tesouro", engine);
        this.objetos.set("cofre", new CofreMisterioso());
    }

    usa(ferramenta, objeto) {
        if (!this.engine.mochila.tem(ferramenta) || !this.objetos.has(objeto)) return false;
        const obj = this.objetos.get(objeto);
        const sucesso = obj.usar(this.engine.mochila.pega(ferramenta));
        if (obj.acaoOk) {
            this.engine.indicaFimDeJogo();
            console.log("Você encontrou o grimório! Vitória!");
        }
        return sucesso;
    }
}
