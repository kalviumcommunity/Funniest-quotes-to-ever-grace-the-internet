const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');



dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json()); 



mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

app.get("/ping",(req,res)=>{
    res.send("pong!");

})
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);
  });


const crudRoutes = require('./CrudRoutes');
app.use('/api', crudRoutes);


app.get('/ping', (req, res) => {
  res.send('Pong!');
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.listen(8080,()=>{
    try {
        console.log("Server connected sucessfully");
    } catch (error) {
        console.log(error)
    }
})

