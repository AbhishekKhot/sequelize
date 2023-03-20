const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    static associate(models) {
      comment.belongsTo(models.post, { onDelete: "CASCADE" });
      comment.hasMany(models.replies, { onDelete: "CASCADE" });
    }
  }

  comment.init(
    {
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );
  return comment;
};
