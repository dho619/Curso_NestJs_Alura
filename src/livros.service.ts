import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService {
    livros: Livro[] = [
        // new Livro("LIV01", "Livro 01", 29.95),
        // new Livro("LIV02", "Livro 02", 45.55),
        // new Livro("LIV02", "Livro 03", 32.30)
    ];

    obterTodos(): Livro[] {
        return this.livros;
    }

    obterUm(id: number): Livro {
        return this.livros[0];
    }

    criar(livro: Livro) {
        this.livros.push(livro);
    }

    alterar(livro: Livro): Livro {
        return livro;
    }

    apagar(id: number) {
        return this.livros.pop();
    }
}