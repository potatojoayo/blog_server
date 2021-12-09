import Post from "../model/post";
import { PostType } from "../model/post";

export const insertPost = async (post: PostType) => {
  await new Post(post).save();
};

export const getAll = async () => {
  return await Post.find({ secret: false }).sort({ date: -1 });
};

export const updatePost = async (post: PostType) => {
  await Post.replaceOne({ _id: post._id }, post);
};
