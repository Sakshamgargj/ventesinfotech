import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAddBlogMutation } from "@/redux/blog/blogApi";
// import { useEditBlogMutation } from "@/redux/blog/blogApi";
import { notifyError, notifySuccess } from "@/utils/toast";

interface BlogFormInputs {
  title: string;
  description: string;
  content?: string;
  author: string;
}

const useBlogSubmit = () => {
  const [logo, setLogo] = useState<string>(""); // This should be set when the image is uploaded
  const [status, setStatus] = useState<"active" | "inactive" | undefined>("active");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const router = useRouter();

  const [addBlog] = useAddBlogMutation();
//   const [editBlog] = useEditBlogMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BlogFormInputs>();

  const handleSubmitBlog: SubmitHandler<BlogFormInputs> = async (data) => {
    try {
        const blogData = {
            title: data.title,
            description: data.description,
            content: data.content || "", // Set default if undefined
            author: data.author,
            image: logo,  // Ensure logo URL is assigned correctly here
            status,
        };
  
        console.log("Blog Data:", blogData); // Log to verify all fields are present
  
        const response = await addBlog(blogData);
        if ("error" in response && response.error) {
            console.log("Error occurred in useSubmitBlog");
        } else {
            notifySuccess("Blog added successfully");
            setIsSubmitted(true);
            reset();
            setLogo("");
        }
    } catch (error) {
        console.error("Blog submission error:", error);
        notifyError("Something went wrong");
    }
  };
  

  //   Handle blog editing
//   const handleSubmitEditBlog = async (data: BlogFormInputs, id: string) => {
//     try {
//       const blogData = {
//         ...data,
//         logo,
//         status,
//       };
//       const response = await editBlog({ id, data: blogData });
//       if ("error" in response && response.error) {
//         // Check if the error is of type FetchBaseQueryError
//         const errorMessage = (response.error as FetchBaseQueryError)?.data?.message || "Failed to update blog";
//         console.log("Error occurred in useSubmitEditBlog:", errorMessage);
//         notifyError(errorMessage);
//       } else {
//         notifySuccess("Blog updated successfully");
//         setIsSubmitted(true);
//         reset();
//         router.push('/blogs');
//       }
//     } catch (error) {
//       console.error("Blog editing error:", error);
//       notifyError("Something went wrong");
//     }
//   };
  return {
    register,
    handleSubmit,
    errors,
    setLogo,
    setStatus,
    handleSubmitBlog,
    isSubmitted,
    setIsSubmitted,
    // handleSubmitEditBlog,
  };
};

export default useBlogSubmit;


