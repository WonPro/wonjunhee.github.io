const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { email, message } = req.body;

    // 이메일 전송 설정
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your-email@gmail.com', // 발신 이메일 주소
            pass: 'your-password' // 발신 이메일 비밀번호
        }
    });

    // 이메일 전송 옵션
    const mailOptions = {
        from: 'your-email@gmail.com', // 발신 이메일 주소
        to: 'wonjunhee.com@gmail.com', // 수신 이메일 주소
        subject: '웹 페이지로부터 메시지가 도착했습니다.',
        text: `이메일: ${email}\n\n메시지: ${message}`
    };

    // 이메일 전송
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('이메일 전송에 실패했습니다.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('이메일이 성공적으로 전송되었습니다.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
