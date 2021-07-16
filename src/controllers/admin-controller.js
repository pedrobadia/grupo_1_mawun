const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const adminController = {
    create: (req, res)=> {
        res.render ('admin/create-product');
    }, 
    store: (req, res)=> {
        res.render ('admin/store-product');
    }
};

module.exports = adminController;