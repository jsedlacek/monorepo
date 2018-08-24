import express from 'express';
import path from 'path';

import { getPosts } from '@jsedlacek/shared';

const app = express();

app.get('/api/posts', (req, res) => {
  res.send(getPosts());
});

app.use('/', express.static(path.join(__dirname, '../../client/build')));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
