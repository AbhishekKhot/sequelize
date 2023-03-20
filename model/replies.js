const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class replies extends Model {
    static associate(models) {
      replies.belongsTo(models.comment, { onDelete: "CASCADE" });
    }
  }

  replies.init(
    {
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );
  return replies;
};
