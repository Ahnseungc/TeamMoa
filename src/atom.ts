import { atom } from "recoil";

export interface user {
  accessToken?: string;
  name?: string;
  img?: string;
  email?: string;
  id?: number;
}

export const userAtom = atom<user>({
  key: "user",
  default: {
    id: 0,
    accessToken: "",
    name: "",
    img: "",
    email: "",
  },
});
