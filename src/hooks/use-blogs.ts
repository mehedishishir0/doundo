import { useQuery } from "@tanstack/react-query";
import { blogService } from "@/lib/api/blog-service";
import { queryKeys } from "@/lib/query-keys";

export const useBlogs = () => {
  return useQuery({
    queryKey: queryKeys.blogs.lists(),
    queryFn: blogService.getAllBlogs,
  });
};

export const useBlog = (id: string) => {
  return useQuery({
    queryKey: queryKeys.blogs.detail(id),
    queryFn: () => blogService.getBlogById(id),
    enabled: !!id,
  });
};
