const blog = getBlog(blogTitle);
console.log(blog);

const {title, body} = blog;
console.log(body);

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const h1 = document.createElement("h1");
  h1.innerText = title;

  root.append(h1)

  body.forEach(element => {
    const p = document.createElement("p");
    p.innerHTML = element;
  
    root.append(p)
  });

})