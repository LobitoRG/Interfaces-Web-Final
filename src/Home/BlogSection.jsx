import React from "react";
import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";

const blogs = [
  { image: blog1, day: "01", month: "Jan", author: "Admin", category: "Tours & Travel", title: "Dolor justo sea kasd lorem clita justo diam amet" },
  { image: blog2, day: "01", month: "Jan", author: "Admin", category: "Tours & Travel", title: "Dolor justo sea kasd lorem clita justo diam amet" },
  { image: blog3, day: "01", month: "Jan", author: "Admin", category: "Tours & Travel", title: "Dolor justo sea kasd lorem clita justo diam amet" },
];

const BlogSection = () => (
  <div className="container-fluid py-5">
    <div className="container pt-5 pb-3">
      <div className="text-center mb-3 pb-3">
        <h6 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Blog</h6>
        <h1>Latest From Our Blog</h1>
      </div>
      <div className="row pb-3">
        {blogs.map((blog, index) => (
          <div className="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
            <div className="blog-item">
              <div className="position-relative">
                <img className="img-fluid w-100" src={blog.image} alt="Blog" />
                <div className="blog-date">
                  <h6 className="font-weight-bold mb-n1">{blog.day}</h6>
                  <small className="text-white text-uppercase">{blog.month}</small>
                </div>
              </div>
              <div className="bg-white p-4">
                <div className="d-flex mb-2">
                  <a className="text-primary text-uppercase text-decoration-none" href="#">{blog.author}</a>
                  <span className="text-primary px-2">|</span>
                  <a className="text-primary text-uppercase text-decoration-none" href="#">{blog.category}</a>
                </div>
                <a className="h5 m-0 text-decoration-none" href="#">{blog.title}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BlogSection;
