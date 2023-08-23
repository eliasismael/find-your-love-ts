import man1 from "../assets/men/hombre1.jfif";
import man2 from "../assets/men/hombre2.jfif";
import man3 from "../assets/men/hombre3.jfif";
import man4 from "../assets/men/hombre4.jfif";
import man5 from "../assets/men/hombre5.jfif";

import { IUser } from "../models/user-model";

const manImages = [man1, man2, man3, man4, man5];
const manNames = ["Juan", "Lucas", "Nicolás", "Tomás", "Marcelo"];

const initialMen: IUser[] = [];

for (let i = 0; i < manNames.length; i++) {
    const man: IUser = {
        name: manNames[i],
        img: manImages[i],
        gender: "MALE",
        presentation: null,
    };

    initialMen.push(man);
}

export default initialMen;
