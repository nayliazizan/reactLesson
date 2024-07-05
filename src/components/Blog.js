function Blog(props) {
    const content = props.posts.map((post) => {
        return <Post key={post.id} post={post} />;
    });

    return <div>{content}</div>
}

function Post(props) {
    const { id, title, content, author, date } = props.post;

    return (
        <div>
            <div>{id}</div>
            <div>Title: {title}</div>
            <div>Content: {content}</div>
            <div>Author: {author}</div>
            <div>Uploaded: {date}</div>
            <br></br>
        </div>
    )
}

export default Blog;