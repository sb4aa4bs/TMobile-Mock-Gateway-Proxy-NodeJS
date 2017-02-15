/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('accessory_details', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        accessory_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'accessory',
                key: 'id'
            }
        },
        more_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        warranty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        processor: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        vendor: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        store_num: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'accessory_details',
        timestamps:false
    });
};

