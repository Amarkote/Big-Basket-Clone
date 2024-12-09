const sequelize = require('./models');
const Product = require('./models/product'); // Import the model

// Sync the models to the database
sequelize.sync({ force: true }) // Set { force: true } to drop and recreate tables (use carefully)
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });
