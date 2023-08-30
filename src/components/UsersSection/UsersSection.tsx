// Component
import User from "../User/User";

// Models
import { IUser } from "../../models/user";

// Props
interface IUsersSectionProps {
  users: IUser[];
}

function UsersSection(props: IUsersSectionProps): JSX.Element {
  return (
    <section
      className="w-3/4 flex flex-row justify-center flex-wrap gap-8 px-0 mb-10
    sm:px-10
    "
    >
      {props.users.map((user: IUser, i: number) => {
        return <User key={i} user={user} />;
      })}
    </section>
  );
}

export default UsersSection;
