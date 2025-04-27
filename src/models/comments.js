module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('Comments', {
      comment_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      comments_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      blog_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'comments',
      timestamps: true,
      createdAt: false,
      updatedAt: 'updated_at'
    });
  
    Comments.associate = models => {
      Comments.belongsTo(models.User, { foreignKey: 'user_id' });
      Comments.belongsTo(models.Blog, { foreignKey: 'blog_id' });
    };
  
    return Comments;
  };
  