const _ = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes
  }

  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
  let favorite = blogs[0]

  if(!favorite) return null

  blogs.forEach(blog => {
    if(blog.likes > favorite.likes) favorite = blog
  })

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = (blogs) => {
  if(blogs.length === 0) return null

  const groupedByAuthors = _.groupBy(blogs, 'author')
  const authors = _.map(groupedByAuthors, (author, name) => {
    return {
      author: name,
      blogs: _.size(author)
    }
  })
  const mostBlogs = _.maxBy(authors, 'blogs')

  return mostBlogs
}

const mostLikes = (blogs) => {
  if(blogs.length === 0) return null

  const groupedByAuthors = _.groupBy(blogs, 'author')
  const authors = _.map(groupedByAuthors, (author, name) => {
    return {
      author: name,
      likes: _.reduce(author, (sum, blog) => {
        return sum + blog.likes
      }, 0)
    }
  })

  return _.maxBy(authors, 'likes')
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}