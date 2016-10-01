'use strict';
module.exports = function(sequelize, DataTypes) {
  var Keywords = sequelize.define('Keywords', {
    keyword: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Keywords.belongsToMany(models.Photos, {through: 'PhotosKeywords'});
        Keywords.belongsToMany(models.Themes, {through: 'ThemeKeywords'});
      }
    }
  });
  return Keywords;
};
