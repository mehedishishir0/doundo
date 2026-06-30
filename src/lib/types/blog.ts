export interface Blog {
  _id: string;
  title: string;
  description: string;
  img?: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogsResponse {
  success: boolean;
  message: string;
  data: Blog[];
}

export interface SingleBlogResponse {
  success: boolean;
  message: string;
  data: Blog;
}
