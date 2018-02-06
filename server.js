const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/items', (req, res) => app.render(req, res, '/search_result', req.query.search));

  server.get('/items/:id', (req, res) => app.render(req, res, '/item_detail', { id: req.params.id }));

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server Ready on http://localhost:${port}`);
  });
});
