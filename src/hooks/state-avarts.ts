import { create } from "zustand";

interface Props {
  src: string;
  code: number;
}

interface State {
  avatars: Props[];
  addAvatar: (item: Props) => void;
}

const useStore = create<State>((set) => {
  const avatarsLocalStorage1 = localStorage.getItem("avatars-pay");
  return {
    avatars: avatarsLocalStorage1 ? JSON.parse(avatarsLocalStorage1) : [],
    addAvatar: (item) =>
      set((state) => {
        const newAvatars = state.avatars.some((i) => i.code === item.code);
        if (!newAvatars) {
          const avatarsLocalStorage2 = localStorage.getItem("avatars-pay");
          const formatLocal = avatarsLocalStorage2 ? JSON.parse(avatarsLocalStorage2) : []
          localStorage.setItem("avatars-pay", JSON.stringify([...formatLocal, item]));
          return { avatars: [...state.avatars, item] };
        } else {
          return state;
        }
      }),
  };
});

export default useStore;
