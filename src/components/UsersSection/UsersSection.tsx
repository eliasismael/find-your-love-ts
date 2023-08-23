// Component
import User from "../User/User";

// Models
import { IUser } from "../../models/user-model";

function UsersSection({ users }: { users: IUser[] }): JSX.Element {
    return (
        <section className="w-full flex flex-row justify-center flex-wrap gap-8 p-2 mb-10">
            {users.map((user: IUser, i: number) => {
                return <User key={i} user={user} />;
            })}
        </section>
    );
}

export default UsersSection;
