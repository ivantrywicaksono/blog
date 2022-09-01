const blogs = [
  {
    title: null,
    body: null
  }
];

function getBlog(title) {
  return blogs.find(blog => blog.title.toLowerCase() == title.toLowerCase()); 
}