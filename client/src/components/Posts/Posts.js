import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>
    );
}

export default Posts;
