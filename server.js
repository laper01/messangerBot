const bodyParser = require('body-parser');
const express = require('express');
const { bottender } = require('bottender');
const axios = require('axios');
const Messages = require('./src/models/Messages').Messages;

const app = bottender({
  dev: process.env.NODE_ENV !== 'production',
});

const port = Number(process.env.PORT) || 5000;

// the request handler of the bottender app
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const verify = (req, _, buf) => {
    req.rawBody = buf.toString();
  };
  server.use(bodyParser.json({ verify }));
  server.use(bodyParser.urlencoded({ extended: false, verify }));

  // your custom route
  server.get('/api', (req, res) => {
    res.json({ ok: true });
  });

  server.get('/messages',(req,res, next)=>{
    Messages.all((err,messages)=>{
        if (err) return next(err);
        res.send(messages);
    })
  })

server.get('/messages/:id', (req, res, next)=>{
    const {id} = req.params;
    Messages.find(id, (err, messages)=>{
        if (err) return next(err);
        res.send(messages)
    });
});

  server.delete('/messages/:id', (req, res, next)=>{
    const {id} = req.params;
    Messages.delete(id, (err)=>{
        if(err) return next(err);
        res.send({msg: "deleted"})
    })
})

  // route for webhook request
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});