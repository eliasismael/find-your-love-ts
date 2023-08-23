export type Gender = "MALE" | "FEMALE";

export interface IUser {
    name: string;
    img: string;
    gender: Gender;
    presentation: null | string;
}
