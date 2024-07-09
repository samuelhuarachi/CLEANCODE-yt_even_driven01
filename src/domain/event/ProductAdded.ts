import DomainEvent from "./DomainEvent";

export default class ProductAdded implements DomainEvent {
    name = "ProductAdded";

    constructor(
        readonly id_product: number,
        readonly product_name: string) {
        console.log(`id_product: ${ id_product}`);
        console.log(`product_name: ${ product_name}`);
    }
}
