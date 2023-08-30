import { useState, useEffect } from "react";

import { ISectionRefs } from "../../models/pageSections";

interface INavbarProps {
  refs: ISectionRefs;
}

function Navbar(props: INavbarProps): JSX.Element {
  const scrollToSection = (
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) => {
    if (ref.current !== null) {
      const navbarHeight = 80; /* altura de tu barra de navegación en pixeles*/
      const difference = window.scrollY - navbarHeight;
      const offsetTop = ref.current.getBoundingClientRect().top + difference;

      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [isMenuModalVisible, setIsMenuModalVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="z-10 sticky top-0 flex justify-center items-center w-full h-20 bg-gradient-to-r from-primary to-secondary shadow-white shadow-sm">
      <h1 className="text-white text-center font-serif text-3xl">
        Find your love
      </h1>

      {windowWidth < 768 ? (
        <MenuIcon
          isMenuModalVisible={isMenuModalVisible}
          setIsMenuModalVisible={setIsMenuModalVisible}
          scrollToSection={scrollToSection}
          refs={props.refs}
        />
      ) : (
        <ul className="flex gap-4 absolute right-10 xs:border-2">
          <li
            className="text-white cursor-pointer active:underline"
            onClick={() => scrollToSection(props.refs.appRef)}
          >
            App
          </li>

          <li
            className="text-white cursor-pointer active:underline"
            onClick={() => scrollToSection(props.refs.aboutUsRef)}
          >
            Sobre nosotros
          </li>

          <li
            className="text-white cursor-pointer active:underline"
            onClick={() => scrollToSection(props.refs.contactRef)}
          >
            Contacto
          </li>
        </ul>
      )}
    </header>
  );
}

interface IMenuIconProps {
  isMenuModalVisible: boolean;
  setIsMenuModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  scrollToSection: (ref: React.MutableRefObject<HTMLDivElement | null>) => void;
  refs: ISectionRefs;
}

const MenuIcon = (props: IMenuIconProps) => {
  return (
    <>
      {/******* ICON********/}
      <div
        className="cursor-pointer h-2/5 aspect-square  absolute right-4 rounded-xl "
        onClick={() => props.setIsMenuModalVisible((prevState) => !prevState)}
      >
        <div className="relative flex flex-col justify-evenly items-center h-full">
          <span className="bg-white h-[2px] w-3/4 left-0.5 rounded-sm "></span>
          <span className="bg-white h-[2px] w-3/4 left-0.5"></span>
          <span className="bg-white h-[2px] w-3/4 left-0.5"></span>
        </div>
      </div>

      {/******* MODAL ********/}

      {props.isMenuModalVisible && (
        <div className="w-10/12 h-40 rounded-md bg-white/90 absolute border-gray-300 border-b border-r right-6 top-20 mt-2 shadow-white/80 shadow-md duration-300 ease-linear ">
          <ul className="flex flex-col justify-evenly items-center absolute shado h-full w-full text-gray-800 font-semibold">
            <li
              className=" cursor-pointer active:underline"
              onClick={() => {
                props.scrollToSection(props.refs.appRef);
                props.setIsMenuModalVisible(false);
              }}
            >
              App
            </li>

            <li
              className="text-gray-800 cursor-pointer active:underline"
              onClick={() => {
                props.scrollToSection(props.refs.aboutUsRef);
                props.setIsMenuModalVisible(false);
              }}
            >
              Sobre nosotros
            </li>

            <li
              className="text-gray-800 cursor-pointer active:underline"
              onClick={() => {
                props.scrollToSection(props.refs.contactRef);
                props.setIsMenuModalVisible(false);
              }}
            >
              Contacto
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
