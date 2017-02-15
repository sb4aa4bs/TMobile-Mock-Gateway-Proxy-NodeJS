/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_details', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'product',
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
    tableName: 'product_details',
      timestamps:false
  });
};
