import NewBus from "../src/application/usecase/NewBus";
import NewLog from "../src/application/usecase/NewLog";
import Mediator2 from "../src/infra/Mediator2";

describe("Company bus", () => {
    test("Create a bus", async () => {
        const input = {
            id: "00000001",
            name: "Mexico to EUA Bus 1",
            company: "Mexico Border",
            year_fabrication: 1987,
            total_km: 323321,
            total_seats: 30,
        };

        const mediator = new Mediator2();
        const new_log = new NewLog(mediator);
        mediator.register(new_log);

        const new_bus = new NewBus(mediator);
        await new_bus.execute(input);
    });
});
