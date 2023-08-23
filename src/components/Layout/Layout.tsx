import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="shadow-inner bg-gradient-to-br from-pink-400 to-yellow-300 w-screen min-h-full absolute">
            {children}
        </div>
    );
}

export default Layout;
