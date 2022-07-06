const SinglePost = (props) => {
    return (
        <li className='posts_single-post' data-post-id={props.singlePost.id}>
            <h3 className='posts_post-title'>{props.singlePost.title}</h3>
            <p className='posts_post-description'>{props.singlePost.body}</p>
        </li>
    )
}

export default SinglePost;