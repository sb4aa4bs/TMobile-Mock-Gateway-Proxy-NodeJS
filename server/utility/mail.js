/**
 * Created by rghosh on 2/20/2017.
 */
const nodemailer = require('nodemailer');

module.exports= {

    sendMail2Customer: function (order) {
        console.log('sendMail2Customer')
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'robin.ghos@gmail.com',
                pass: 'Panaji9091'
            }
        });
        var mailOptions = {
            to: 'rghosh@prokarma.com',
            subject: 'Your order complete with order id=' + order.id,
            text: "",
            html: " <strong>Your email   </strong>" + order.email + "<br>"
                  + " <strong>Your firstname:   </strong>" + order.firstname + "<br>" +
                  + " <strong>Your lastname:   </strong>" + order.lastname + "<br>" +

                /*
                  Iterate the order and get just the name of the product and price, maybe total
                 */
                  + " Thank you for placing an order with us."
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
                reply(error);
            }
            console.log('Mail sent!');
        });
    }
}