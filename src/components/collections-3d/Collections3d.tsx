import Header from "../header/header";
import IconPay from "../../assets/icon-pay.png";

import "./Collections3d.css";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { images3D } from "../../utils/array-images-3d";
import { Toaster, toast } from "react-hot-toast";
import useStore from "../../hooks/state-avarts";
import { useLocation, useNavigate } from "react-router-dom";

const Collections3d = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [pay, setPay] = useState(false);
  const { avatars, addAvatar } = useStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [avatarSelect, setAvatarSelect] = useState({
    name: "",
    code: 0,
    src: "",
  });

  useEffect(() => {
    navigate(pathname);
  }, []);

  const handleImageLoad = () => {
    const allImagesLoaded = images3D.every((image) => image.isLoaded);

    if (allImagesLoaded) {
      setAreImagesLoaded(true);
    }
  };

  const openModal = (name: string, code: number, src: string) => {
    open();
    setAvatarSelect({ name, code, src });
  };

  const payNFT = () => {
    setPay(true);
    setTimeout(() => {
      setPay(false);
      close();
      toast.success("Compra exitosa");
      addAvatar({ code: avatarSelect.code, src: avatarSelect.src });
    }, 1500);
  };

  return (
    <section className="container-collections">
      <Header />
      <div className="collections">
        <Toaster position="top-center" reverseOrder={false} gutter={8} />
        {images3D.map((image, index) => (
          <div className="card2" key={index}>
            {!areImagesLoaded && (
              <div className="loader">
                <div className="spiner" />
              </div>
            )}
            <img
              src={image.src}
              onLoad={() => {
                image.isLoaded = true;
                handleImageLoad();
              }}
            />
            <div className="section-card">
              <p>{image.name + " # " + image.code}</p>
              <button
                disabled={avatars.some((i) => i.code === image.code)}
                onClick={() => openModal(image.name, image.code, image.src)}
                style={{
                  backgroundColor: avatars.some((i) => i.code === image.code)
                    ? "#BED754"
                    : "#0052ff",
                  cursor: avatars.some((i) => i.code === image.code)
                    ? "auto"
                    : "pointer",
                }}
              >
                {avatars.some((i) => i.code === image.code)
                  ? "Comprado"
                  : "Comprar"}
                {!avatars.some((i) => i.code === image.code) && (
                  <img src={IconPay} width={25} />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal opened={opened} onClose={close} title="Pagar NFT">
        <div className="card-pay">
          <h2>{avatarSelect.name}</h2>
          <img src={avatarSelect.src} />
          <p>
            Nuestros NFT son diseñados por los mejores diseñadores de la
            industria, cada NFT se da acceso al nuevas colecciones premius
          </p>
          <h2>{avatarSelect.code}</h2>
          <button
            onClick={payNFT}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {pay ? <div className="loader-mini" /> : "PAGAR NFT"}{" "}
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default Collections3d;
