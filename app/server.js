var express = require('express'), cors = require('cors'), mongoose = require('mongoose');
const userRouter = require('./routes/posts');
require("dotenv").config();

const app = express();

//Server Port
const port = process.env.PORT || 8000;

//Routes
app.get("/", (req, res) => {
	res.send("Olá Mundo!");
});

//Middlewares
app.use(express.json());
app.use('/user', cors(), userRouter);

//Database Connection
mongoose.connect(process.env.DB_CONNECTION, 
  {
  	useNewUrlParser: true,
  	useCreateIndex: true,
  	useUnifiedTopology: true,
  })
  .then(() => console.log("Sucesso na conexão"))
  .catch((err) => console.log(`Não conseguiu se conectar com o banco ${process.env.DB_CONNECTION} `, err));


//Server connection
app.listen(port, () => console.log(`o app está em execução na porta ${port}`));