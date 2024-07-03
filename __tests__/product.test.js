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
});
