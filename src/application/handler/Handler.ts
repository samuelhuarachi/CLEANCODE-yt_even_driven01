import DomainEvent from "../../domain/event/DomainEvent";


interface Handler {
    eventName: string;
    handle(event: DomainEvent): Promise<void>;
}

export default Handler;
