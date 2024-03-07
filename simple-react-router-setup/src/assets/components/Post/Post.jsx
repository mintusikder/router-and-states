// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Post = () => {
    const post = useLoaderData()
    console.log(post)
    return (
        <div>
            <h3>This is post {post.length}</h3>
            <div>
                {
                    post.map(posts => )
                }
            </div>
        </div>
    );
};

export default Post;