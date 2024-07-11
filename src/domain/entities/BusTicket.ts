

export default class BusTicket {
    constructor(id: string | null,
        bus_id: string,
        user_id: string,
        location_out: string,
        location_in: string,
        date_out: Date,
        date_in: Date,
        distance_in_km: number,
        created_at: Date) {
    }

    static create(bus_id: string,
        user_id: string,
        location_out: string,
        location_in: string,
        date_out: Date,
        date_in: Date,
        distance_in_km: number) {
        const created_at = new Date();

        return new BusTicket(null,
            bus_id,
            user_id,
            location_out,
            location_in,
            date_out,
            date_in,
            distance_in_km,
            created_at);
    }
}
