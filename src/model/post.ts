import { Schema, model, Model, Document } from "mongoose";

export interface PostType extends Document {
  _id: number;
  title: string;
  subTitle: string;
  content: string;
  repImage: string;
  tags: [string];
  date: Date;
  category: string;
  secret: boolean;
}

const postSchema = new Schema(
  {
    _id: Number,
    title: String,
    subTitle: String,
    content: String,
    repImage: String,
    tags: [String],
    date: Date,
    category: String,
    secret: Boolean,
  },
  { collection: "Post" }
);

postSchema.pre("save", async function (this: PostType, next) {
  await Post.countDocuments().then((res: number) => {
    this._id = res + 1;
    next();
  });
});

const Post: Model<PostType> = model("Post", postSchema);
export default Post;
