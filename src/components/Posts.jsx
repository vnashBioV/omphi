import Post from "./Post"
import { client } from "../app/lib/sanity";


const getData = async () => {
    const query = `*[_type == 'post']`
    const data = await client.fetch(query);
    return data;
}

const Posts = async () => {
    const posts = await getData()
    return (
        <section className='w-full flex-col justify-center items-center flex' id="posts">
            <Post posts={posts}/>
        </section>
    )
}

export default Posts
