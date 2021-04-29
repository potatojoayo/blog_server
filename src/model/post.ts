import {Schema, model} from 'mongoose'

const postSchema = new Schema({
	title: String,
	subTitle: String,
	content: String,
	repImage: String,
	tags: [String],
	date: Date,
	id: Number,
	category: String
})

const Post = model("Post", postSchema);

export default Post;
