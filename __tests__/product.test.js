import Mediator from "../src/infra/Mediator";
import NotificationProductAdded from "../src/application/handler/NotificationProductAdded";
import AddProduct from "../src/application/usecase/AddProduct";
import Mailer from "../src/infra/Mailer";

describe("testing product", () => {
    test("testing event driven design", async () => {
        const mediator = new Mediator();
        const mailer = new Mailer();
        const notificationProductAdded = new NotificationProductAdded(mailer);
        mediator.register(notificationProductAdded);

        const addProduct = new AddProduct(mediator);
        const input = {
            id_product: 321,
            product_name: "Celular S",
        };
        await addProduct.execute(input);

        expect(true).toBe(mailer.get_mails().includes(2));
    });

    test("create a bus", async () => {
        const input = {
            id: 1,
            company: "Mexico Border",
            year_fabrication: 1987,
            total_km: 323321,
        };
        const new_bus = new NewBus();
        await new_bus.execute(input);
    });

    test("create new bus ticket", async () => {
        // adicionar um bus ticket
        // aviso o usuario que o busticket foi adicionado
        // aviso meu financeiro que um bus ticket foi gerado
        const add_bus_ticket = new AddBusTicket();
    });
});
