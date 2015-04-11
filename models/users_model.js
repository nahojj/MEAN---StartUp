var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
      type: String,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      trim: true,
		  default: '',
      match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    color: {
      type: String,
  		trim: true,
  		default: ''
    },
    hashed_password: {
      type: String,
  		default: ''
    },
    created: {
  		type: Date,
  		default: Date.now
	  }
});

mongoose.model('User', UserSchema);
