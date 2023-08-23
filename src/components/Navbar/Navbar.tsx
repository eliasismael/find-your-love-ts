import { NavLink } from "react-router-dom";

export default function Navbar(): JSX.Element {
    const routes = {
        Home: "/",
        Contact: "/contact",
        "About us": "/about-us",
    };

    const textsForLinks = Object.keys(routes);
    const routesForLinks = Object.values(routes);

    return (
        <div className="flex justify-center items-center w-full h-20 bg-gradient-to-r from-primary to-secondary shadow-white shadow-sm">
            <h1 className="text-white text-center font-serif text-3xl">
                Find your love
            </h1>

            <ul className="flex gap-4 absolute right-8 ">
                {textsForLinks.map((text, i) => {
                    return (
                        <li className="text-white active:underline">
                            <NavLink to={routesForLinks[i]}>{text}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
