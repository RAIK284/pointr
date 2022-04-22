const cron = require('node-cron');
const mongoConnection = require("../utils/database");
const userController = require('../controllers/userController.js')
const nodemailer = require("nodemailer");

const sendNotificationsJob = cron.schedule("0 8 * * 0", async function sendEmailNotifications() {
    const db = mongoConnection.getDb();
    const userList = [];
    const currentDate = new Date();

    // One week represented in milliseconds
    const ONE_WEEK = 604800000;

    const users = await db.collection('users').find({}).toArray();

    // Check if the user hasn't signed in for a week
    await users.forEach((user) => {
        if (currentDate - Date.parse(user.lastLogin) > ONE_WEEK) {
            userList.push({
                "username": user.username,
                "email": user.email
            });
        }
    })

    for (user of userList) {
        await sendEmail(user.email);
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(email, username) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "pointr.notifications@gmail.com", // generated ethereal user
            pass: "PointrAdmin123", // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'pointr.notifications@gmail.com', // sender address
        to: email, // list of receivers
        subject: "We miss you!", // Subject line
        text: "It's been awhile since you've been on Pointr! Come back and spread some positivity!", // plain text body
        html: "<b>It's been awhile since you've been on Pointr! Come back and spread some positivity!</b>", // html body
    });
}

module.exports = {sendNotificationsJob}
