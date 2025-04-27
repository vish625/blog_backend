module.exports = (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    favourite_id: { // Primary key
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'favourites', // Ensure this matches the table name in the database
    timestamps: false, // Set to true if you have `createdAt` and `updatedAt` columns
  });

  Favourite.associate = (models) => {
    Favourite.belongsTo(models.User, { foreignKey: 'user_id' });
    Favourite.belongsTo(models.Blog, { foreignKey: 'blog_id' });
  };

  return Favourite;
};