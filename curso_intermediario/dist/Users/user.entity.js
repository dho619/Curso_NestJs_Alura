"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const class_validator_1 = require("class-validator");
const IsUniqueUserName_validator_1 = require("./IsUniqueUserName.validator");
class User {
}
__decorate([
    IsUniqueUserName_validator_1.IsUniqueUserName({
        message: "Nome de usuário já utilizado!"
    }),
    class_validator_1.IsNotEmpty({
        message: "Usuário obrigatório!"
    }),
    class_validator_1.IsString({
        message: "Usuário precisa ser uma string!"
    }),
    __metadata("design:type", String)
], User.prototype, "user", void 0);
__decorate([
    class_validator_1.IsEmail({}, {
        message: "Email obrigatório!"
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: "Senha obrigatória!"
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    class_validator_1.IsNotEmpty({
        message: "Nome obrigatório!"
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
exports.User = User;
//# sourceMappingURL=user.entity.js.map