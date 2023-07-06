const axios = require('axios');

test('test if telegram bot is working ok?', async () => {
    let output = await axios.get("http://127.0.0.1:3000/myapp/gen/data/telegramBot/n");
    expect(output.data.msg).toBe("got it bro");
});
