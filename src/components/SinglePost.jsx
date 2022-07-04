const SinglePost = (props) => {
    return (
        <li className='posts_single-post' data-post-id={props.listPosts.id}>
            <h3 className='posts_post-title'>{props.listPosts.title}</h3>
            <p className='posts_post-description'>{props.listPosts.body}</p>
        </li>
    )
}

export default SinglePost;