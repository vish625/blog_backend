const Sequelize = require('sequelize');
const { sequelize } = require('../configs/database'); // Import only the `sequelize` instance

const db = {};

// Assign Sequelize instance to `db`
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Import models
db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.Blog = require('./blog')(sequelize, Sequelize.DataTypes);
db.Category = require('./category')(sequelize, Sequelize.DataTypes);
db.Comments = require('./comments')(sequelize, Sequelize.DataTypes);
db.Favourite = require('./favourites')(sequelize, Sequelize.DataTypes);

// Define associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;