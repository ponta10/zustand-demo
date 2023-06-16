import { create } from "zustand";
import { devtools } from "zustand/middleware";


interface Post {
    title: string;
    body: string;
}

interface State {
  posts: Post[];
  getPosts: () => void;
  selectedPost: Post | null;
  selectPost: (post: Post) => void;
};

const useStore = create<State>()(
  devtools((set) => ({
    posts: [],
    getPosts: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      set({ posts: await response.json() });
    },
    selectedPost: null,
    selectPost: (post) => set((state) => ({ selectedPost: post })),
  }))
);

export default useStore;
