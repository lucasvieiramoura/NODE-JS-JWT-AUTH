const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./app/models");

const Role = db.role;
db.sequelize.sync();//{force: true}).then(() => {     
  //console.log('Drop and Resync Db');      comentado para não apagar as tabelas ja populadas.
  //initial();
//});

var corsOptions = {
    origin: 'http://localhost:8081'
};

// Rotas
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({message: 'Welcome to GAP application'});
});

function initial() {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "moderator"
    });
   
    Role.create({
      id: 3,
      name: "admin"
    });
  }

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})