const vExpress = require('express')
const bodyParser = require('body-parser')
const app = vExpress()
const port = 3000

app.use(bodyParser.json());

// GIT-ის გამოყენება

// let x = 10.6;
// let name = "MerabC";
// let status = true;
// let define  = undefined;
//variable
const vApp = {
  id: 1,
  name: 'App 1',
  status: true,
  define: undefined,
  obieqti: {
    id: 1,
    name: 'App 1',
    status: true,
  }
};

const statuses = [
  'active', 'inactive', 'pending', 'deleted'
];

var apps = [
  { id: 1, name: 'App 1' },
  { id: 2, name: 'App 2' },
  { id: 3, name: 'App 3' },
  { id: 4, name: 'App 4' },
  { id: 5, name: 'App 5' }
];

app.get('/app', (req, res) => {
  res.json([apps]);
})

app.get('/app/:id', (req, res) => {
  const vId = parseInt(req.params.id);
  const result = apps.find((app) => {
    return app.id === vId
  });
  res.json(result);
})

app.post('/app', (req, res) => {
  const vBody = req.body;
  const vLengthOfApps = apps.push(vBody);
  res.status(201).json({
    status: true,
    message: 'განცხადება ჩაიწერა წარმატებით!',
    result: vLengthOfApps
  });
})

app.put('/app/:id', (req, res) => {
  const vId = parseInt(req.params.id);
  const vBody = req.body;
  const result = apps.find((app) => {
    return app.id === vId
  });
  result.name = vBody.name;
  res.json({
    status: true,
    message: 'განცხადება განახლდა წარმატებით!',
    result: result
  });
})

app.delete('/app/:id', (req, res) => {
  const vId = parseInt(req.params.id);
  const result = apps.find((app) => {
    return app.id === vId
  });
  const index = apps.indexOf(result);
  apps.splice(index, 1);
  res.json({
    status: true,
    message: 'განცხადება წაიშალა წარმატებით!',
    result: result
  });
})

app.get('/index', (req, res) => {
  res.status(200).sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`My app listening on port ${port}`)
})