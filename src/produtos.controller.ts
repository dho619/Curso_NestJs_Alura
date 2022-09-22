import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos')
export class ProdutosController {

    @Get()
    obterTodos(): string {
        return 'Lista todos os produtos';
    }

    @Get(':id')
    obterUm(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`;
    }

    @Post()
    criar(@Body() produto): string {
        console.log(produto)
        return "Produto criado";
    }

    @Put(':id')
    alterar(@Param() params, @Body() produto): string {
        console.log(produto)
        return `Atualiza o produto ${params.id}`;
    }

    @Delete(':id')
    Apagar(@Param() params): string {
        return `Apaga o produto ${params.id}`;
    }
}
