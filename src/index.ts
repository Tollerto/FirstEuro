import bodyParser from 'body-parser';
import express from 'express';
import expressPartials from 'express-partials';
import { join } from 'path';
import DataBase from './database'

const app = express();

let DB: DataBase; //create DataBase
(async () => {
  DB = await DataBase.connect(); //connect DataBase
})();

app.set('views', join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(expressPartials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, '../public')));

app.get('/', async (req, res) => {
  res.render('index');
});

app.get('/add', async (req, res) => {
  res.render('add');
});

app.get('/about', async (req, res) => {
  res.render('about');
});

app.listen(3000, () => {
  console.log('runnin on http://localhost:3000/');
});