import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // your schema fields
});

const User = mongoose.model('User', userSchema);
export default User;