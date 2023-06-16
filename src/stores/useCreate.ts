import { create } from "zustand";
import { devtools } from "zustand/middleware";

type State = {
  posts: any[];
  getPosts: () => void;
  selectedPost: any | null;
  selectPost: (post: any) => void;
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
