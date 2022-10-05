import { Exclude, Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsUniqueUserName } from "./IsUniqueUserName.validator";

export class User {
    id: number;

    @IsUniqueUserName({
        message: "Nome de usuário já utilizado!"
    })
    @IsNotEmpty({
        message: "Usuário obrigatório!"
    })
    @IsString({
        message: "Usuário precisa ser uma string!"
    })
    user: string;

    @IsEmail({}, {
        message: "Email obrigatório!"
    })
    email: string;
    
    @Exclude({
        toPlainOnly: true
    })
    @IsNotEmpty({
        message: "Senha obrigatória!"
    })
    password: string;

    @Expose({
        name: 'name'
    })
    @IsNotEmpty({
        message: "Nome obrigatório!"
    })
    nome: string;

    created_at: Date;
}