import React, {useState, useEffect} from "react";
import SinglePost from './SinglePost';

const PostCatalog = () => {
    const URL_ALL_POSTS = 'https://jsonplaceholder.typicode.com/posts';

    const [listPosts, setListPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(URL_ALL_POSTS);
            const data = await response.json();
            setListPosts(data);
        };

        getPosts();
    }, []);

    const renderListPosts = () => {
        return (
            listPosts.map((item, index) => {
                return <SinglePost key={index} listPosts={item}/>
            }))
    };

    return (
        <div className='posts'>
            <ul className='posts_list'>
                {renderListPosts()}
            </ul>
        </div>
    )
}

export default PostCatalog;