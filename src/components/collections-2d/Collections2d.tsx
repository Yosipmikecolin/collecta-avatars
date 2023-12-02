import { useState } from "react";
import IconPay from "../../assets/icon-pay.png";
import { images2D } from "../../utils/array-images-2d";
import Header from "../header/header";
import "./Collections2d.css";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import useStore from "../../hooks/state-avarts";

const NFT2D = () => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const { avatars, addAvatar } = useStore();
  const [pay, setPay] = useState(false);
  const [avatarSelect, setAvatarSelect] = useState({
    name: "",
    code: 0,
    src: "",
  });

  const handleImageLoad = () => {
    const allImagesLoaded = images2D.every((image) => image.isLoaded);

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
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <Header />
      <div className="collections">
        {images2D.map((image, index) => (
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
            Diseños 2D premiums de los mejores ilustradores de new york y
            chicago
          </p>
          <h2>{avatarSelect.code}</h2>
          <button
            onClick={payNFT}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {pay ? <div className="loader-mini" /> : "PAGAR NFT"}
          </button>
        </div>
      </Modal>
    </section>
  );
};

export default NFT2D;
