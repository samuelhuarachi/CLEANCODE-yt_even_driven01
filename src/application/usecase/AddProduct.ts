import ProductAdded from "../../domain/event/ProductAdded";
import Mediator from "../../infra/Mediator";

export default class AddProduct {
    constructor(readonly mediator: Mediator) {}

    async execute(input: Input): Promise<void> {
        const event = new ProductAdded(input.id_product, input.product_name);
        await this.mediator.publish(event);
    }
}

type Input = {
    id_product: number,
    product_name: string
}
