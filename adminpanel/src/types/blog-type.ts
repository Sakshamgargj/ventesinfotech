// blog-type.ts

// Type representing a single blog entry
export interface IBlog {
    id: string;
    title: string;
    description: string;
    content?: string; // Content can be optional for flexibility
    author: string;
    createdAt: string;
    updatedAt: string;
    image?: string; // Optional image associated with the blog
    status: "active" | "inactive"; // Use specific types for better validation
  }
  
  // Type for adding a new blog entry
  export interface IAddBlog {
    title: string;
    description: string;
    content: string; // Optional content
    author: string;
    image: string; // Optional image
    status?: "active" | "inactive"; // Default to "active" if not provided
  }
  
  // Response type when a blog is successfully added
  export interface IBlogAddResponse {
    success: boolean;
    message: string;
    data: IBlog;
  }
  
  // Response type when fetching a list of blogs
  export interface BlogResponse {
    blogs: IBlog[];
    total: number;
  }