const BASE_URL = "https://52wrj2po2g.execute-api.ap-south-1.amazonaws.com/prod";

export interface IPost {
  fileName: string;
  body: string;
}
export interface IGetPostsResponse {
  posts: IPost[];
}
export const getPosts = async (count: string | number) => {
  const response = await fetch(`${BASE_URL}/?count=${count}`);
  return response.json();
};
