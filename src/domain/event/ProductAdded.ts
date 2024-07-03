import DomainEvent from "./DomainEvent";

export default class ProductAdded implements DomainEvent {
    name = "ProductAdded";

    constructor(readonly id_product: number, readonly product_name: string) {}
}
