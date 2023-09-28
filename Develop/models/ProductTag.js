const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns. product_id, teg_id
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Product',
        key: 'id',
        unique: 'true'
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Tag',
        key: 'id',
        unique: 'true'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
