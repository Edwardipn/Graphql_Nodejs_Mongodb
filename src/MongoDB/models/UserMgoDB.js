import {Schema, model} from 'mongoose';

const userSchema = new Schema({
	name: { type: String, required: true },
    lastname: String,
    age: Number
});

const User = model('User', userSchema);
export default User;