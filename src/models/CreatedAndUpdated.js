const{ sequelize } = require("sequelize");

module.exports = {
    created_at:
    type: sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.NOW,

    update_at:
    type: sequelize.DATE,
    allowNull: false,
    defaultValue: sequelize.NOW,
    onUpdate: sequelize.NOW 
}