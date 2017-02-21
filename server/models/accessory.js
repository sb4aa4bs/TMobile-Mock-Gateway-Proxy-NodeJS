
module.exports = function(sequelize, DataTypes) {
    var Accessory= sequelize.define('accessory', {

        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        epid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        retail_price: {
            type: "DOUBLE",
            allowNull: false
        },
        sale_price: {
            type: "DOUBLE",
            allowNull: false
        },
        promotion: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        configuration: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        skuid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        contract: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        store: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'accessory',
        timestamps:false,
        underscored:true,
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                Accessory.hasOne(models.accessory_details, {
                    onDelete: 'cascade'
                });
            }
        }
    });
    return Accessory;
};
