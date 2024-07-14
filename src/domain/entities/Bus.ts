export default class Bus {
    constructor(public id: string|null,
        readonly name: string, readonly company: string, readonly year_fabrication: number,
        readonly total_km: number, readonly total_seats: number) {
    }

    static create(name: string, company: string, year_fabrication: number,
        total_km: number, total_seats: number) {
        return new Bus(null, name, company, year_fabrication, total_km, total_seats);
    }

    getName() {
        return this.name;
    }
}
