const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURI, { useUnifiedTopology: true }, { useNewUrlParser: true });

const AdminSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 255
    },
    email : {
        type : String,
        required: true,
        max: 255
    },
    password: {
        type : String,
        require: true,
        min: 8,
        max: 1024
    },
    role: {
        type: String,
        require: true 
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('admin', AdminSchema)