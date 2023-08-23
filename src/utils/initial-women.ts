import woman1 from "../assets/women/mujer1.jfif";
import woman2 from "../assets/women/mujer2.jfif";
import woman3 from "../assets/women/mujer3.jfif";
import woman4 from "../assets/women/mujer4.jfif";
import woman5 from "../assets/women/mujer5.jfif";

import { IUser } from "../models/user-model";

const womanImages = [woman1, woman2, woman3, woman4, woman5];
const womanNames = ["Lucía", "Valentina", "María", "Juana", "Sofía"];

// Women preloaded
const initialWomen: IUser[] = [];

for (let i = 0; i < womanNames.length; i++) {
    const woman: IUser = {
        name: womanNames[i],
        img: womanImages[i],
        gender: "FEMALE",
        presentation: null,
    };

    initialWomen.push(woman);
}

export default initialWomen;
