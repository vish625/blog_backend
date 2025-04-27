module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'users',
      timestamps: false
    });
  
    User.associate = models => {
      User.hasMany(models.Blog, { foreignKey: 'user_id' });
      User.hasMany(models.Comments, { foreignKey: 'user_id' });
      User.belongsToMany(models.Blog, { through: models.Favourite, foreignKey: 'user_id' });
    };
  
    return User;
  };
  