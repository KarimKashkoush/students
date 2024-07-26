const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


const allRoutes = require('./routes/allRoutes')


// Connect to MongoDB
mongoose.connect("mongodb+srv://studentsName:6BJSOredO4wouN9v@cluster0.g0ywcmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(err);
});

app.use(allRoutes);

