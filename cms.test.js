const axios = require('axios');

test('test query for cms in a separate project', async () => {
    let output = await axios.get("http://127.0.0.1:3000/myapp/gen/data/telegramBot/n");
    expect(output.data.msg).toBe("got it bro");
});
