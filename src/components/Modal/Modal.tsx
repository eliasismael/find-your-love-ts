import { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";

type Props = { children: ReactNode };

function Modal(props: Props): React.ReactPortal {
    const portalNode = document.createElement("div");

    useEffect(() => {
        document.body.appendChild(portalNode);

        return () => portalNode.remove();
    }, [portalNode]);

    return ReactDOM.createPortal(props.children, portalNode);
}

export default Modal;
