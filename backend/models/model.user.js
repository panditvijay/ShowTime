const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{
        type: String,
        required: true,

    },
    lastName:{
        type: String,
        required: true,
    },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password:{
    type: String,
    required: true,
    minlength: 3
  }
}, {
  timestamps: true,
});

// hash user password before saving into database
userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
    });

const User = mongoose.model('Users', userSchema);

module.exports = User;