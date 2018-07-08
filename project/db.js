const Sequelize = require('sequelize')

const db = new Sequelize('oldbooks', 'book', 'book', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const User = db.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
	email:{
		type: Sequelize.STRING,
        allowNull: false,
		primaryKey: true
	},
	college:{
		type: Sequelize.STRING,
        allowNull: false
	},
	address:{
		type: Sequelize.STRING,
        allowNull: false
	},
	phno:{
		type: Sequelize.BIGINT(10),
        allowNull: false
	},
	pass: {
		type: Sequelize.STRING,
        allowNull: false
	}
})
const Listings = db.define('listings', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Bookname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    condition:{
    type: Sequelize.ENUM,
    values:['New','Almost New','Sight Damaged','Worn']
}
    
});
Listings.belongsTo(User,{as:'seller'});

const Wishlist = db.define('wishlist', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Bookname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Booksellerid:
    {
      type: Sequelize.STRING,
        allowNull: false  
    }
});
Wishlist.belongsTo(User,{as:'userid'});

const Message = db.define('message1', {
	message:{
		type: Sequelize.STRING,
        allowNull: false
	},
	userid:{
		type: Sequelize.STRING,
        allowNull: false
	}
});
Message.belongsTo(User,{as:'sellerid'});
db.sync()
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))

exports = module.exports = {
    User,Listings,Wishlist,Message
}
