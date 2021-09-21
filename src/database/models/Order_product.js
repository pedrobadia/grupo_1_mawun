const Sequelize = require('sequelize');

module.exports = function (sequelize, dataTypes){

    let alias = "Order_product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER,
        },
        order_id: {
            type: dataTypes.INTEGER,
        }
    };

    let config = {
        tableName: "order_products",
        timestamps: false
    };

    const Order_product = sequelize.define(alias, cols, config);

    // Order_product.associate = function (models) {

    //     Order_product.belongsTo(models.Order, {
    //         as: "products_order",
    //         foreignKey: "order_id"
    //     }),

    //     Order_product.belongsTo(models.Product, {
    //         as: "products_orders",
    //         foreignKey: "product_id"
    //     })        
    // };

    // Order_product.associate = function (models) {

    //     Order_product.belongsToMany(models.Order, {
    //         as: "products_order",
    //         foreignKey: "order_id"
    //     }),

    //     Order_product.belongsToMany(models.Product, {
    //         as: "products_orders",
    //         foreignKey: "product_id"
    //     })        
    //};

    return Order_product;
}    