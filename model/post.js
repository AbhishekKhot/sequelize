const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    static associate(models) {
      post.belongsTo(models.user, { onDelete: "CASCADE" });
      post.hasMany(models.comment, { onDelete: "CASCADE" });
    }
  }

  post.init(
    {
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  return post;
};
