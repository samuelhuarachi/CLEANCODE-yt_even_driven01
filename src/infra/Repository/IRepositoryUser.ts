import User from "../../domain/entities/User";

interface IRepositoryUser {
    getUserById(id: string): Promise<User>;
}

export default IRepositoryUser;
