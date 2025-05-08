import { useState } from 'react'
import './Blog.css'

function Blog() {
    const [blogPosts] = useState([
        {
            id: 1,
            title: 'Getting Started with Spring Boot',
            date: 'May 1, 2025',
            excerpt: 'Learn how to set up your first Spring Boot application and understand the core concepts behind this powerful framework.',
            content: 'Spring Boot is a framework that makes it easier to create stand-alone, production-grade Spring-based applications. In this post, I share my experience getting started with Spring Boot and provide a step-by-step guide for beginners...',
            image: '/blog-1.png',
            tags: ['Java', 'Spring Boot', 'Backend']
        },
        {
            id: 2,
            title: 'My Journey Learning React',
            date: 'April 22, 2025',
            excerpt: 'In this post, I share my experience learning React and some key takeaways for beginners who are just starting out.',
            content: 'React has become one of the most popular JavaScript libraries for building user interfaces. When I first started learning React, I was overwhelmed by concepts like JSX, components, props, and state. Here\'s how I approached learning React and what helped me the most...',
            image: '/blog-2.png',
            tags: ['React', 'JavaScript', 'Frontend']
        },
        {
            id: 3,
            title: 'The Power of PostgreSQL',
            date: 'April 10, 2025',
            excerpt: 'Explore the features that make PostgreSQL a powerful choice for relational databases and how to get the most out of it.',
            content: 'PostgreSQL is an open-source object-relational database system with over 30 years of active development. It\'s known for its reliability, feature robustness, and performance. In this article, I\'ll discuss why PostgreSQL might be the right choice for your next project...',
            image: '/blog-3.png',
            tags: ['PostgreSQL', 'Database', 'Backend']
        },
        {
            id: 4,
            title: 'Tips for Better Code Reviews',
            date: 'March 28, 2025',
            excerpt: 'Code reviews are essential for maintaining code quality. Here are some tips to make your code reviews more effective.',
            content: 'Regular code reviews help catch bugs early, ensure code quality, and share knowledge across the team. As someone who believes that "a code review a day keeps the bugs away," I\'ve compiled some best practices for effective code reviews...',
            image: '/blog-4.png',
            tags: ['Best Practices', 'Team Collaboration', 'Code Quality']
        }
    ])

    return (
        <div className="blog-page">
            <div className="container">
                <h1 className="page-title">Blog</h1>
                <p className="page-description">
                    My thoughts, experiences, and insights on software development, programming languages, and best practices.
                </p>

                <div className="blog-grid">
                    {blogPosts.map(post => (
                        <div className="blog-card" key={post.id}>
                            <div className="blog-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                </div>
                                <h2 className="blog-title">{post.title}</h2>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <div className="blog-tags">
                                    {post.tags.map((tag, index) => (
                                        <span className="blog-tag" key={index}>{tag}</span>
                                    ))}
                                </div>
                                <a href={`/blog/${post.id}`} className="blog-read-more">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog