import ProductAdded from "../../domain/event/ProductAdded";
import Mailer from "../../infra/Mailer";
import Handler from "./Handler";

export default class NotificationProductAdded implements Handler {
    eventName = "ProductAdded";
    constructor(readonly mailer: Mailer) {}

    async handle(event: ProductAdded): Promise<void> {
        console.log("reagindo ao produto adicionado");
        this.mailer.push(2);
    }
}
