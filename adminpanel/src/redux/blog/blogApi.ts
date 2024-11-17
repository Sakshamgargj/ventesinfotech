import { apiSlice } from "../api/apiSlice";
import { BlogResponse, IBlogAddResponse, IAddBlog } from "@/types/blog-type";

export const blogApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // Fetch all blogs
    getAllBlogs: builder.query<BlogResponse, void>({
      query: () => `/api/blog/getblog`,
      providesTags: (result) =>
        result?.blogs
          ? [
              ...result.blogs.map(({ id }) => ({ type: "Blog" as const, id })),
              { type: "Blog" as const },
            ]
          : [{ type: "Blog" as const }],
      keepUnusedDataFor: 600,
    }),

    // Add a new blog
    addBlog: builder.mutation<IBlogAddResponse, IAddBlog>({
      query: (data) => ({
        url: `/api/blog/addBlog`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [{ type: "Blog" }],
    }),
    
    // Edit an existing blog
    // editBlog: builder.mutation<IBlogAddResponse, { id: string; data: Partial<IAddBlog> }>({
    //   query: ({ id, data }) => ({
    //     url: `/api/blog/edit/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [{ type: "Blog", id }, { type: "Blog" }],
    // }),

    // // Fetch a single blog by ID
    // getBlog: builder.query<IBlog, string>({
    //   query: (id) => `/api/blog/get/${id}`,
    //   providesTags: (result, error, id) => [{ type: "Blog", id }],
    // }),

    // // Delete a blog
    // deleteBlog: builder.mutation<BlogDelResponse, string>({
    //   query: (id) => ({
    //     url: `/api/blog/delete/${id}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: (result, error, id) => [{ type: "Blog", id }, { type: "BlogList" }],
    // }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useAddBlogMutation,
//   useEditBlogMutation,
//   useGetBlogQuery,
//   useDeleteBlogMutation,
} = blogApi;
