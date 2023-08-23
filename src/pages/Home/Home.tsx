import { useContext } from "react";

import { UsersContext } from "../../context/users";
import { IUsersContext } from "../../context/users";

import UsersSection from "../../components/UsersSection/UsersSection";
import ButtonFindCouples from "../../components/ButtonFindCouples/ButtonFindCouples";
import ButtonAddUser from "../../components/ButtonAddUser/ButtonAddUser";

function Home() {
    const { men, women } = useContext(UsersContext) as IUsersContext;

    if (!men || !women) return <h1>Cargando...</h1>;

    return (
        <div>
            <main className="flex flex-col items-center p-10">
                <UsersSection users={men} />
                <UsersSection users={women} />
            </main>

            <section className="w-full flex justify-center">
                <ButtonFindCouples />
            </section>
            <ButtonAddUser />
        </div>
    );
}

export default Home;
