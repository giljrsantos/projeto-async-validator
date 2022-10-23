import { createServer } from 'node:http';
import url from 'node:url';

const server = createServer((req, res) => {
    const query = url.parse(req.url, true).query;
        
    res.write(
        JSON.stringify({disponivel: query.username === 'consolelog' })
    );

    res.end();
});

server.listen(3000, () => {
    console.log('API pronto para uso');
})