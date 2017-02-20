/**
 * Created by rghosh on 2/20/2017.
 */
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

/*var transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: '*******@gmail.com',
        pass: '*****password'
    }
}));*/

module.exports= {

    sendMail2Customer: function (order, cart) {
        console.log('sendMail2Customer')
        var transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            auth: {
                user: 'robin.ghos@gmail.com',
                pass: 'Panaji9091'
            }
        }));
        var mailOptions = {
            to: 'rghosh@prokarma.com',
            subject: 'Your order complete with order id=' + order.id,
            text: "",
            html: " <strong>Your email   </strong>" + order.email + "<br>" +
                  " <strong>Your firstname:  </strong>" + order.firstname + "<br>" +
                  " <strong>Your lastname:   </strong>" + order.lastname + "<br>" +
                  " <strong>Total Price:     </strong>$" + cart.total + "<br>" +
                   " Thank you for placing an order with us."
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