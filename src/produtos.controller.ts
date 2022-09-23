import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro 01", 29.95),
        new Produto("LIV02", "Livro 02", 45.55),
        new Produto("LIV02", "Livro 03", 32.30)
    ]

    @Get()
    obterTodos(): Produto[] {
        return this.produtos;
    }

    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0];
    }

    @Post()
    criar(@Body() produto: Produto): Produto {
        produto.id=100;
        this.produtos.push(produto);
        return produto;
    }

    @Put(':id')
    alterar(@Param() params, @Body() produto: Produto): Produto {
        return produto;
    }

    @Delete(':id')
    Apagar(@Param() params): string {
        this.produtos.pop();
        return `Produto apagado`;
    }
}
