import axios from "axios"
const qs = require('qs');

export const sendText = async (body) => {
    // require('dotenv').config();
    const accountSid = 'ACf11a1e834e0b7699fb7c37fc81670651';//process.env.TWILIO_ACCOUNT_SID;
    const authToken = '75bcd2ed9a918bab5a5347b950e7710c';//process.env.TWILIO_AUTH_TOKEN;
    // const client = require('twilio')(accountSid, authToken);
    // return client.messages
    // .create({
    //    body: body,
    //    from: '+13464820762',
    //    to: '+14694183597'
    //  })
    // .then(message => console.log(message.sid));
    await (axios.post("https://api.twilio.com/2010-04-01/Accounts/" + accountSid 
        + "/Messages.json", qs.stringify({
            Body: body,
            From: '+13464820762',
            To: '+14694183597'
        }), {
        auth: {
            username: accountSid,
            password: authToken
        }
    }));
};
