import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "./user.service";
export declare class IsUniqueUserNameConstraint implements ValidatorConstraintInterface {
    private userService;
    constructor(userService: UserService);
    validate(userName: string, validationArguments?: ValidationArguments): boolean | Promise<boolean>;
}
export declare function IsUniqueUserName(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
