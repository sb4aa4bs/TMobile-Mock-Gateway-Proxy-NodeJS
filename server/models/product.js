/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var Product= sequelize.define('product', {

            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id'
                }
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
            tableName: 'product',
            timestamps:false,
            underscored:true,
            classMethods: {
                associate: function (models) {
                    // associations can be defined here
                    Product.hasOne(models.product_details, {
                        onDelete: 'cascade'
                    });
                }
            }
        });
    return Product;
};
