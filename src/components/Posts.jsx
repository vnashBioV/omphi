import Post from "./Post";
import { client } from "../app/lib/sanity";
import { motion } from "framer-motion";

const getData = async () => {
  const query = "*[_type == 'post']"; // Fixed Query Syntax
  const data = await client.fetch(query, { cache: 'no-store' });
  return data;
}

const Posts = async () => {
  const posts = await getData();
  return (
    <section className='w-full flex-col justify-center items-center flex' id="posts">
      <Post posts={posts} />
    </section>
  );
}

export default Posts;
