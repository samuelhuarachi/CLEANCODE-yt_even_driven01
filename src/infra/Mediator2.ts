import Handler from "../application/handler/Handler";
import DomainEvent from "../domain/event/DomainEvent";
import Event from "../domain/event/Event";

export default class Mediator2 {
    events: Event[];

    constructor() {
        this.events = [];
    }

    register(handler: Event) {
        this.events.push(handler);
    }

    async publish(event: Event) {
        for (const registered_event of this.events) {
            if (registered_event.react_to && registered_event.react_to.includes(event.event_name)) {
                await registered_event.reacting(event);
            }
        }
    }
}
