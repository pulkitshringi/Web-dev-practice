// Models/customers.js
const mongoose = require ('mongoose');
async function main(){
    await mongoose.connect('mongodb://localhost:27017/relationDemo');   
}
main().catch(err => console.log(err));
const orderSchema = new mongoose.Schema({
    item: String,
    price: Number
});
const Order = mongoose.model('Order', orderSchema);

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});
const Customer = mongoose.model('Customer', customerSchema);

const findCustomers = async () => {
    const res = await Customer.find().populate('orders');
    console.log(res[0]);
}
findCustomers();


// const addCustomers = async () => {
//     const cust1 = new Customer({
//         name: 'John',
//         age: 25,
//         orders: []
//     });
//     let order1 = await Order.findOne({ item: 'Book' });
//     let order2 = await Order.findOne({ item: 'Pen' });    
//     cust1.orders.push(order1); // pushing whole object
//     cust1.orders.push(order2); // pushing whole object
//     const res = await cust1.save();
//     console.log(res);
// }
// addCustomers();

// const order1 = async() => { const res =  await Order.insertMany([{
//     item: 'Book',
//     price: 10
// },
// {
//     item: 'Pen',
//     price: 5
// }]
// );
// console.log(res);
// }
// order1();