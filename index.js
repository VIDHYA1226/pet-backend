const express =require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const path= require('path');
const morgan = require('morgan');

const app=express();

const categoryRoutes=require('./routes/category');
const petRoutes=require('./routes/pet');
const adoptionRoutes= require('./routes/adoption');

app.use(cors());

app.use(express.json());

app.use(morgan('tiny'));

app.use('/public',express.static(path.join(__dirname,'public')));

//routes
app.use('/api/category',categoryRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoption', adoptionRoutes);

const mongoUri ="mongodb+srv://test2:1234@cluster0.fdt4ryt.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
});

mongoose.connection.on('connected',()=> {
    console.log('Connected to Mongodb...');
}); 

mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to mongog",err);
});

app.listen(4000,()=>{
    console.log("App is running on port 4000")
});

