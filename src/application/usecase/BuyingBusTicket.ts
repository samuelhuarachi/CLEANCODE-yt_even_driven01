import BusTicket from "../../domain/entities/BusTicket";
import Event from "../../domain/event/Event";
import Mediator2 from "../../infra/Mediator2";


export default class BuyingBusTicket implements Event {
    event_name: "BuyingBusTicket";

    constructor(readonly mediator: Mediator2) {}

    reacting(event: Event): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async execute(input: Input): Promise<void> {
        console.log("executing: BuyingBusTicket");

        const bus_ticket = BusTicket.create(input.bus_id,
            input.user_id, input.location_out,
            input.location_in, input.date_out,
            input.date_in, input.distance_in_km);

        this.mediator.publish(this);
    }
}

type Input = {
    bus_id: string,
    user_id: string,
    location_out: string,
    location_in: string,
    date_out: Date,
    date_in: Date,
    distance_in_km: number,
    created_at: Date
}
