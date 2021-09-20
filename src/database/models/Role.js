module.exports = (sequelize, dataTypes) => {

    let alias = "Role";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
        },
    }

    let config = {
        tableName: 'roles',
        timesTamps: false
    }

    const Role = sequelize.define(alias, cols, config);

    Role.associate = function(models){
        Role.hasMany(models.User,{
            as: "users",
            foreignKey: "role_id"
        })
    }

    return Role;
}