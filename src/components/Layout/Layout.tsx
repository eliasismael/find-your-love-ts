import { ReactNode } from "react";

interface ILayoutsProps {
  children: ReactNode;
}

function Layout(props: ILayoutsProps) {
  return (
    <div className="shadow-inner bg-gradient-to-br from-pink-400 to-yellow-200 w-screen min-h-full">
      {props.children}
    </div>
  );
}

export default Layout;
