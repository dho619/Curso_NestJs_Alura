import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    private users: User[] = [
        {
            id: 1,
            user: "admin",
            email: "admin@admin.com",
            password: "admin123",
            nome: "Admin",
            created_at: new Date()
        }
    ];

    public create(user: User): User {
        user.id = this.users.reduce((a,b) => a.id>b.id?a:b).id + 1;
        user.created_at = new Date();
        this.users.push(user);
        return user;
    }

    public getUserByUserName(userName: string): User {
        return this.users.find(u => u.user === userName);
    }

    public getUsers(): User[] {
        return this.users;
    }
}