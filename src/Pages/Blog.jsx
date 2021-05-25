import React from 'react'
import '../Styles/Blog.scss';


const BlogBox = ({blog}) => {
    return (
        <div className='blog-box'>
            <p className='blog-date'>{blog.Date}</p>
            <h1 className='blog-title'>{blog.Title}</h1>
            <p className='blog-enter'>Read More</p>
        </div>
    )
}

const Blog = ({blogs}) =>  {

    return (
        <div className='blog'>
            {blogs.map((blog) => {
                return <BlogBox blog={blog} />
            })}
        </div>)
}

export default Blog;
