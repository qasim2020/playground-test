const axios = require('axios');
const config = require('./config.json');

var env = process.env.NODE_ENV;
var envConfig = config[env];
Object.keys(envConfig).forEach((key) => {
process.env[key] = envConfig[key];
});

describe('verify email features', () => {

    test('log in session is created successfully', async () => {
        let signIn = await axios.post("http://127.0.0.1:3000/challenge/gen/data/checkSignIn/n",{
            email: process.env.userEmailChallenge,
            password: process.env.userPassChallenge
        });
        expect(signIn.data.status).toBe(200);
        console.log("starting verification email test");
    });

    test('send verification email', async () => {
//         let signIn = await axios.post("http://127.0.0.1:3000/challenge/gen/data/checkSignIn/n",{
//             email: process.env.userEmailChallenge,
//             password: process.env.userPassChallenge
//         });
        let output = await axios.post("http://127.0.0.1:3000/challenge/auth/data/sendVerificationEmail/n");
        console.log(output);
        expect(output.data.success).toBe("Email sent! Check your inbox");
        // console.log(output);
    });

});

