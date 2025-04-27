module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
      blog_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      blog_title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      thumbnail: {
        type: DataTypes.STRING,
        allowNull: true
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'blogs',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  
    Blog.associate = models => {
      Blog.belongsTo(models.User, { foreignKey: 'user_id' });
      Blog.belongsTo(models.Category, { foreignKey: 'category_id' });
      Blog.hasMany(models.Comments, { foreignKey: 'blog_id' });
      Blog.belongsToMany(models.User, { through: models.Favourite, foreignKey: 'blog_id' });
    };
  
    return Blog;
  };
  