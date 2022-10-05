import { Module } from "@nestjs/common";
import { IsUniqueUserNameConstraint } from "./IsUniqueUserName.validator";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService, IsUniqueUserNameConstraint],
})
export class UserModule {


}