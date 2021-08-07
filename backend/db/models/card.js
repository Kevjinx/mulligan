'use strict';
module.exports = (sequelize, DataTypes) => {
  const Card = sequelize.define('Card', {
    name: DataTypes.STRING,
    info: DataTypes.TEXT,
    strength: DataTypes.INTEGER,
    provision: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    factionId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    categoryId: DataTypes.ARRAY(Sequelize.INTEGER),
    keywordId: DataTypes.ARRAY(Sequelize.INTEGER),
    rarityId: DataTypes.INTEGER,
    setId: DataTypes.INTEGER
  }, {});
  Card.associate = function(models) {
    // associations can be defined here
    Card.belongsTo(models.Faction, { foreignKey: 'factionId'});
    Card.belongsTo(models.Type, { foreignKey: 'typeId'});
    Card.belongsTo(models.Category, { foreignKey: 'categoryId'});
    Card.belongsTo(models.Keyword, { foreignKey: 'keywordId'});
    Card.belongsTo(models.Rarity, { foreignKey: 'rarityId'});
    Card.belongsTo(models.Set, { foreignKey: 'setId'});

  };
  return Card;
};