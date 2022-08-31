const blogs = [
  {
    title: "Etika Profesi",
    body: [
      "Etika profesi adalah", 
      "bla bla",
      "test tset"
    ]
  }
];

function getBlog(title) {
  return blogs.find(blog => blog.title.toLowerCase() == title.toLowerCase()); 
}