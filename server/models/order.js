/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cart_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    currentcarrier: {
      type: DataTypes.STRING,
      allowNull: true
    },
    creditscorerangetype: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shiptype: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shipaddress1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shipaddress2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shipcity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shipstate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    shipzip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billaddress1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billaddress2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billcity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billstate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    billzip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    customername: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cardno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    expirydate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: true
    },
    store: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'order'
  });
};
