import Bus from "../../domain/entities/Bus";

interface IRepositoryBus {
    create(bus: Bus): Promise<Bus>;
}

export default IRepositoryBus;
