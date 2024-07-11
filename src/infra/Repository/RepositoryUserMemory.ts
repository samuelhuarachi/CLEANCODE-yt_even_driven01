import User from "../../domain/entities/User";
import IRepositoryUser from "./IRepositoryUser";


export default class RepositoryUserMemory implements IRepositoryUser {
    async getUserById(id: string): Promise<User> {
        return new User("100001", "Samuel Gomes");
    }
}
