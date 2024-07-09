import Event from "../../domain/event/Event";
import Mediator2 from "../../infra/Mediator2";

export default class NewLog implements Event {
    event_name = "NewLog";
    react_to = ["NewBus"];

    constructor(readonly mediator: Mediator2) {}

    async reacting(event: Event): Promise<void> {
        switch (event.event_name) {
        case "NewBus":
            console.log("Estou reagindo a new bus");
            this.execute({ tag: "new_bus", message: "new bus was created" });
            break;

        default:
            break;
        }
    }

    async execute(input: Input): Promise<void> {
        console.log(`new log: ${ input.message}`);
        this.mediator.publish(this);
    }
}

type Input = {
    tag: string,
    message: string
}
