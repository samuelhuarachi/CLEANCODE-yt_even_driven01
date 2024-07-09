interface Event {
    event_name: string; // o evento que eu emito
    react_to?: string[] // o evento que eu reajo

    reacting(event: Event): Promise<void>;
}

export default Event;
