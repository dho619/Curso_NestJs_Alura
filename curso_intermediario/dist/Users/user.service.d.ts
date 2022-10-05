import { User } from "./user.entity";
export declare class UserService {
    private users;
    create(user: User): User;
    getUserByUserName(userName: string): User;
    getUsers(): User[];
}
