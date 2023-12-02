import { Link, useLocation } from "react-router-dom";
import "./hedaer.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import useStore from "../../hooks/state-avarts";
import { Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import IconMenu from "../../assets/icon-menu.png";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const { pathname } = useLocation();
  const { avatars } = useStore();
  const [openMenuMobil, setOpenMenuMobil] = useState(false);

  const openMenu = () => {
    setOpenMenuMobil((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth > 700) {
      setOpenMenuMobil(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h2 style={{ color: "black" }}>Collecta</h2>
        </Link>

        <ul className="menu-web">
          <li>
            <Link
              to={"/"}
              style={{ color: pathname === "/" ? "#0c4bd3" : "black" }}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/collection-3d"}
              style={{
                color: pathname === "/collection-3d" ? "#0c4bd3" : "black",
              }}
            >
              Avatars 3D
            </Link>
          </li>
          <li>
            <Link
              to={"/collection-2d"}
              style={{
                color: pathname === "/collection-2d" ? "#0c4bd3" : "black",
              }}
            >
              Avatars 2D
            </Link>
          </li>
          {avatars.length > 0 && (
            <Button
              style={{ cursor: "pointer" }}
              onClick={open}
              color="#0052ff"
              radius={"lg"}
            >
              Tus avatars
            </Button>
          )}
        </ul>

        <img
          src={IconMenu}
          width={30}
          className="icon-menu"
          onClick={openMenu}
        />
      </nav>

      <Modal
        opened={opened}
        onClose={close}
        title="Avatars comprados"
        size={"lg"}
      >
        <div className="your-avatars">
          {avatars.map((item, index) => (
            <div className="list-avatars" key={index}>
              <img src={item.src} width={200} />
              <p>{item.code}</p>
            </div>
          ))}
        </div>
      </Modal>

      <div className={openMenuMobil ? "menu-mobil-open" : "menu-mobil-close"}>
        <ul>
          <li>
            <Link
              to={"/"}
              style={{ color: pathname === "/" ? "#0c4bd3" : "black" }}
              onClick={() => setOpenMenuMobil(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to={"/collection-3d"}
              style={{
                color: pathname === "/collection-3d" ? "#0c4bd3" : "black",
              }}
              onClick={() => setOpenMenuMobil(false)}
            >
              Avatars 3D
            </Link>
          </li>
          <li>
            <Link
              to={"/collection-2d"}
              style={{
                color: pathname === "/collection-2d" ? "#0c4bd3" : "black",
              }}
              onClick={() => setOpenMenuMobil(false)}
            >
              Avatars 2D
            </Link>
          </li>
          {avatars.length > 0 && (
            <Button
              style={{ cursor: "pointer" }}
              onClick={() => {
                open();
                setOpenMenuMobil(false);
              }}
              color="#0052ff"
              radius={"lg"}
            >
              Tus avatars
            </Button>
          )}
        </ul>
      </div>
    </header>
  );
};

export default React.memo(Header);
