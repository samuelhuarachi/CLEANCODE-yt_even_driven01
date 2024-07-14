import mongoose from "mongoose";
import Bus from "../../domain/entities/Bus";
import IRepositoryBus from "./IRepositoryBus";
import MongoBus from "../MongooseModels/MongoBus";

export default class RepositoryBus implements IRepositoryBus {
    constructor() {}

    async create(bus: Bus): Promise<Bus> {
        console.log("criando o novo bus no banco de dados...");

        let mongoBus = new MongoBus();
        mongoBus.name = bus.name;
        mongoBus.company = bus.company;
        mongoBus = await mongoBus.save();
        console.log(mongoBus);

        bus.id = String(mongoBus._id);

        return bus;
    }
}
