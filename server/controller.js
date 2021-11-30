require('dotenv').config()
const { CONNECTION_STRING } = process.env || 4000
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = { 
    
    
    updateWaitlist: (req, res) => {
    let { email, companyName } = req.body
    sequelize.query(`
    INSERT INTO waitlist (company_name, email)
    VALUES ('${companyName}', '${email}');
    `).then((response) => {
        res.status(200).send(response[0])
    }).catch(err => console.log(err))
    },


    waitlistCount: (req, res) => {
        sequelize.query(`
        SELECT COUNT(*) FROM waitlist
        `)
    .then((response) => {
        res.status(200).send(response[0])
        // res.status is tied to NodeJS, while response parameter is used to store response from DB, which comes as an array.
        // Using [0] bracket notation since postgress sends our data in an array. 
    }).catch(err => console.log(err))
    }
}