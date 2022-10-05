import { User } from "./user.entity";
import { UserService } from "./user.service";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUserByUserName(userName: string): User;
    getUsers(): User[];
    create(user: User): User;
}
