import mongoose from "mongoose";
import BuyingBusTicket from "../src/application/usecase/BuyingBusTicket";
import NewBus from "../src/application/usecase/NewBus";
import NewLog from "../src/application/usecase/NewLog";
import Mediator2 from "../src/infra/Mediator2";
import RepositoryBus from "../src/infra/Repository/RepositoryBus";

describe("Company bus", () => {
    test("Create a bus", async () => {
        await mongoose.connect("mongodb://samuel:samuel123@127.0.0.1:27032/event_yt1?authMechanism=DEFAULT&authSource=admin");

        const input = {
            // id: "00000001",
            name: "Mexico to EUA Bus 1",
            company: "Mexico Border",
            year_fabrication: 1987,
            total_km: 323321,
            total_seats: 30,
        };

        const mediator = new Mediator2();
        const new_log = new NewLog(mediator);
        const repository_bus = new RepositoryBus();
        mediator.register(new_log);

        const new_bus = new NewBus(mediator, repository_bus);
        await new_bus.execute(input);

        await mongoose.connection.close();
    });

    // test("Buying a ticket", async () => {
    //     const mediator = new Mediator2();
    //     const buyingBusTicket = new BuyingBusTicket(mediator);
    //     buyingBusTicket.execute();
    // });
});

// type Input = {
//     bus_id: string,
//     user_id: string,
//     location_out: string,
//     location_in: string,
//     date_out: Date,
//     date_in: Date,
//     distance_in_km: number,
//     created_at: Date
// }
