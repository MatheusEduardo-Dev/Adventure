import { Engine } from "./Basicas.js";
import { Entrada, Corredor, Biblioteca, SalaSecreta, Tesouro } from "./SalasAventura.js";

export class JogoAventura extends Engine {
    criaCenario() {
        const entrada = new Entrada(this);
        const corredor = new Corredor(this);
        const biblioteca = new Biblioteca(this);
        const secreta = new SalaSecreta(this);
        const tesouro = new Tesouro(this);

        entrada.portas.set(corredor.nome, corredor);
        corredor.portas.set(entrada.nome, entrada);
        corredor.portas.set(biblioteca.nome, biblioteca);
        biblioteca.portas.set(corredor.nome, corredor);
        biblioteca.portas.set(secreta.nome, secreta);
        secreta.portas.set(biblioteca.nome, biblioteca);
        secreta.portas.set(tesouro.nome, tesouro);
        tesouro.portas.set(secreta.nome, secreta);

        this.salaCorrente = entrada;
    }
}
