/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_details', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    price: {
      type: "DOUBLE",
      allowNull: false
    },
    tax: {
      type: "DOUBLE",
      allowNull: false
    }
  }, {
    tableName: 'order_details'
  });
};
