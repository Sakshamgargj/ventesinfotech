"use client";
import React, { useEffect, useState } from "react";
import SEO from "@components/seo";
import BlogArea from "@components/blog/page";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import axios from "axios";

const Blog = () => {
  const [blogAll, setBlogAll] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}api/blog/getBlog`);
        if (response.status === 200) {
          setBlogAll(Array.isArray(response.data.result) ? response.data.result : []);
          console.log(blogAll)
        }
      } catch (error) {
        console.error("Error fetching blogs here:", error);
      }
    };
    
    fetchBlogs();
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle={"Blog"} />
      <Header style_2={true} />
      <BlogArea blogData={blogAll} />
    </Wrapper>
  );
};

export default Blog;
