module.exports = function (sequelize, dataTypes){

    let alias = "Newsletter";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
    };

    let config = {
        tableName: "newsletters",
        timestamps: false
    };

    const Newsletter = sequelize.define(alias, cols, config);

    return Newsletter;
}    