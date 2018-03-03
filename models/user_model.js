const mongoose = require('mongoose')

const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  email:{
    type:String,
    required:true
  },
  displayName:{
    type:String,
    required:true
  },
  photoURL:{
    type:String,
    required:false
  },
  uid:{
    type:String,
    required:false
  }
});

// UserSchema.pre('save', async function(next){
//   try{
//     //generate a salt
//     const SALT = await bcrypt.genSalt(10);
//     const PASS = await bcrypt.hash(this.password,SALT);
//     this.password = PASS;
//     next();
//   }catch(error){
//     next(error)
//   }
// });//

// UserSchema.methods.isValidPassword = async function(newPassword){
//   try{
//     return await bcrypt.compare(newPassword,this.password);
//   }catch(error){
//     throw new Error(error);
//   }
// };//

const User = mongoose.model('User',UserSchema);
module.exports = User;