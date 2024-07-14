import Bus from "../../domain/entities/Bus";
import Event from "../../domain/event/Event";
import Mediator2 from "../../infra/Mediator2";
import IRepositoryBus from "../../infra/Repository/IRepositoryBus";

export default class NewBus implements Event {
    event_name = "NewBus";
    bus_id: string;

    constructor(readonly mediator: Mediator2, readonly repository_bus: IRepositoryBus) {}

    reacting(event: Event): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async execute(input: Input): Promise<void> {
        console.log(`creating bus: ${ input.name}`);

        const new_bus = Bus.create(input.name, input.company, input.year_fabrication, input.total_km, input.total_seats);
        const bus = await this.repository_bus.create(new_bus);
        console.log(`minha id: ${ bus.id}`);

        if (bus.id) {
            this.bus_id = bus.id;
        }


        await this.mediator.publish(this);
    }
}

type Input = {
    name: string,
    company: string,
    year_fabrication: number,
    total_km: number,
    total_seats: number
}
