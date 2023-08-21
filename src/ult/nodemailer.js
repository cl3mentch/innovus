import nodeMailer from 'nodemailer';

async function sendmail(email, message) {
	const transporter = nodeMailer.createTransport({
		host: 'smtp.hostinger.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.HOSTINGER_EMAIL,
			pass: process.env.HOSTINGER_PASSWORD
		}
	});

	// send mail with defined transport object
	await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: 'bar@example.com, baz@example.com', // list of receivers
		subject: 'Hello ✔', // Subject line
		text: 'Hello world?', // plain text body
		html: '<b>Hello world?</b>' // html body
	});
}
