class TemporalProduct{
    user: String;
    quantity: number
}
class Product extends TemporalProduct{
    _id: String;
    nameProduct: String;
    image: String;
    price: number;
    unitsAvailable: String;
}