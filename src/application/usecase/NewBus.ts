import Event from "../../domain/event/Event";
import Mediator2 from "../../infra/Mediator2";


export default class NewBus implements Event {
    event_name = "NewBus";

    constructor(readonly mediator: Mediator2) {}

    reacting(event: Event): Promise<void> {
        throw new Error("Method not implemented.");
    }


    async execute(input: Input): Promise<void> {
        console.log(`creating bus: ${ input.name}`);

        await this.mediator.publish(this);
    }
}

type Input = {
    id: string,
    name: string,
    company: string,
    year_fabrication: number,
    total_km: number,
    total_seats: number
}
