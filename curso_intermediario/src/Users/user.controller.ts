import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { NestResponse } from "../core/http/nest-response";
import { NestResponseBuilder } from "../core/http/nest-response-builder";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':name')
    public getUserByUserName(@Param('name') userName: string): User {
        const user = this.userService.getUserByUserName(userName);
        if (!user) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: "Usuário não encontrado!"
            });
        }
        return user;
    }

    @Get()
    public getUsers(): User[] {
        const users = this.userService.getUsers();
        return users;
    }

    @Post()
    public create(@Body() user: User): NestResponse {
        const newUser = this.userService.create(user);
        return new NestResponseBuilder()
            .setStatus(HttpStatus.CREATED)
            .setHeaders({
                    'Location' : `/user/${newUser.user}`
                })
            .setBody(newUser)
            .build();
    }
}