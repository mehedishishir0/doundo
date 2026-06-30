import axiosInstance from "./axios-instance";
import { BlogsResponse, SingleBlogResponse } from "../types/blog";

export const blogService = {
  /**
   * Fetch all blogs.
   */
  getAllBlogs: async (): Promise<BlogsResponse> => {
    const response = await axiosInstance.get<BlogsResponse>("/blogs");
    return response.data;
  },

  /**
   * Fetch a single blog by ID.
   */
  getBlogById: async (id: string): Promise<SingleBlogResponse> => {
    // API endpoint: {{base_url}}/blogs/{{blogId}}
    const response = await axiosInstance.get<SingleBlogResponse>(
      `/blogs/${id}`
    );
    return response.data;
  },
};
