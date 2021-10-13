
const db = require('../../database/models');


module.exports = {

    list:  (req, res) => {

            db.Order_product.findAll({
                include: [{association: 'orders', where: {status: 0, user_id: req.session.usuarioLogeado.id}}]
            })
            .then(orders => {
                let response = {
                    meta: {
                        status: 200,
                        total: orders.length,
                        url: "api/orders"
                    },
                    data: orders
                }
                res.json(response)
            })
            

    }


}