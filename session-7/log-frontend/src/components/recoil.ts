import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authAtom = atom({
    key : "authAtom",
    default : false,
    effects_UNSTABLE: [persistAtom],
})

