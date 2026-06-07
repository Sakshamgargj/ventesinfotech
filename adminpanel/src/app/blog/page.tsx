"use client";
import Wrapper from "@/layout/wrapper";
import GlobalImgUpload from "../components/category/global-img-upload";
import useBlogSubmit from "@/hooks/useBlogSubmit";

export default function DashboardPage() {
  const {
    register,
    handleSubmit,
    setLogo,
    handleSubmitBlog,
    isSubmitted,
    setIsSubmitted,
    errors,
  } = useBlogSubmit();

  return (
    <Wrapper>
      <div className="body-content px-8 py-8 bg-slate-100">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl">
            <h3 className="mb-7 text-4xl text-center">Blog</h3>
            <form
              onSubmit={handleSubmit(handleSubmitBlog)}
              className="bg-white p-8 rounded-md shadow-md"
            >
              {/* Blog Image Upload */}
              <GlobalImgUpload
                isSubmitted={isSubmitted}
                setImage={setLogo}
                image=""
                setIsSubmitted={setIsSubmitted}
              />

              {/* Title Area */}
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="Enter title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">{errors.title.message}</span>
                )}
              </div>

              {/* Description Area */}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="Enter description"
                  rows={4}
                  {...register("description", { required: "Description is required" })}
                ></textarea>
                {errors.description && (
                  <span className="text-red-500 text-sm">{errors.description.message}</span>
                )}
              </div>

              {/* Author Area */}
              <div className="mb-4">
                <label
                  htmlFor="author"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Author
                </label>
                <input
                  type="text"
                  id="author"
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="Enter author"
                  {...register("author", { required: "Author is required" })}
                />
                {errors.author && (
                  <span className="text-red-500 text-sm">{errors.author.message}</span>
                )}
              </div>

              {/* Content Area (optional) */}
              <div className="mb-4">
                <label
                  htmlFor="content"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  className="border rounded w-full py-2 px-3 text-gray-700"
                  placeholder="Enter content"
                  rows={6}
                  {...register("content")}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-200"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
