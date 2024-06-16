import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface user {
  accessToken?: string;
  name?: string;
  img?: string;
  email?: string;
  id?: string;
  nickName?: string;
}

const { persistAtom } = recoilPersist();

export const userAtom = atom<user>({
  key: "user",
  default: {
    id: "",
    accessToken: "",
    name: "",
    img: "",
    email: "",
    nickName: "'",
  },
  effects_UNSTABLE: [persistAtom],
});
