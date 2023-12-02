import "./Cards.css";
import Avatar1 from "../../assets/avatar-1.png";
import Avatar2 from "../../assets/avatar-2.png";
import Avatar3 from "../../assets/avatar-3.png";
import Avatar4 from "../../assets/avatar-4.png";
import Avatar5 from "../../assets/avatar-5.png";
import Avatar6 from "../../assets/avatar-6.png";
import Eye from "../../assets/eyes.png";
import IconPay from "../../assets/icon-pay.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import toast, { Toaster } from "react-hot-toast";
import useStore from "../../hooks/state-avarts";

const Cards = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [pay, setPay] = useState(false);
  const { avatars, addAvatar } = useStore();
  const [avatarSelect, setAvatarSelect] = useState({
    name: "",
    code: 0,
    src: "",
  });

  const handleImageLoad = () => {
    setIsImageLoaded(true);
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
    <section className="container-cards">
      <Toaster position="top-center" reverseOrder={false} gutter={8} />
      <div className="card">
        {!isImageLoaded && (
          <div className="loader">
            <div className="spiner" />
          </div>
        )}
        <img src={Avatar1} onLoad={handleImageLoad} />
        <div className="section-card">
          <p>Panther #727</p>
          <button
            onClick={() => openModal("Panther", 727, Avatar1)}
            disabled={avatars.some((i) => i.code === 727)}
            style={{
              backgroundColor: avatars.some((i) => i.code === 727)
                ? "#BED754"
                : "#0052ff",
              cursor: avatars.some((i) => i.code === 727) ? "auto" : "pointer",
            }}
          >
            {avatars.some((i) => i.code === 727) ? "Comprado" : "Comprar"}
            <img src={IconPay} width={25} />
          </button>
        </div>
      </div>

      <div className="card-collection">
        <button className="collection">Nuevos </button>
        <button className="see">
          <Link to={"/collection-3d"} style={{ position: "relative", top: 2 }}>
            <img src={Eye} width={30} />
          </Link>
        </button>
        {!isImageLoaded && (
          <div className="loader">
            <div className="spiner" />
          </div>
        )}
        <img src={Avatar2} />
        <div className="section-card">
          <p>Lion #642</p>
          <button
            onClick={() => openModal("Lion", 642, Avatar2)}
            disabled={avatars.some((i) => i.code === 642)}
            style={{
              backgroundColor: avatars.some((i) => i.code === 642)
                ? "#BED754"
                : "#0052ff",
              cursor: avatars.some((i) => i.code === 642) ? "auto" : "pointer",
            }}
          >
            {avatars.some((i) => i.code === 642) ? "Comprado" : "Comprar"}

            <img src={IconPay} width={25} />
          </button>
        </div>
      </div>

      <div className="card">
        {!isImageLoaded && (
          <div className="loader">
            <div className="spiner" />
          </div>
        )}
        <img src={Avatar3} />
        <div className="section-card">
          <p>Bear #234</p>
          <button
            onClick={() => openModal("Bear", 234, Avatar3)}
            disabled={avatars.some((i) => i.code === 234)}
            style={{
              backgroundColor: avatars.some((i) => i.code === 234)
                ? "#BED754"
                : "#0052ff",
              cursor: avatars.some((i) => i.code === 234) ? "auto" : "pointer",
            }}
          >
            {avatars.some((i) => i.code === 234) ? "Comprado" : "Comprar"}
            <img src={IconPay} width={25} />
          </button>
        </div>
      </div>

      <div className="card">
        {!isImageLoaded && (
          <div className="loader">
            <div className="spiner" />
          </div>
        )}
        <img src={Avatar4} />
        <div className="section-card">
          <p>Dog #554</p>
          <button
            onClick={() => openModal("Dog", 554, Avatar4)}
            style={{
              backgroundColor: avatars.some((i) => i.code === 554)
                ? "#BED754"
                : "#0052ff",
              cursor: avatars.some((i) => i.code === 554) ? "auto" : "pointer",
            }}
          >
            {avatars.some((i) => i.code === 554) ? "Comprado" : "Comprar"}
            <img src={IconPay} width={25} />
          </button>
        </div>
      </div>

      <div className="card-collection">
        <button className="collection">Nuevos </button>
        <button className="see">
          <Link to={"/collection-3d"} style={{ position: "relative", top: 2 }}>
            <img src={Eye} width={30} />
          </Link>
        </button>
        {!isImageLoaded && (
          <div className="loader">
            <div className="spiner" />
          </div>
        )}
        <img src={Avatar5} />
        <div className="section-card">
          <p>Wild pig #532</p>
          <button
            onClick={() => openModal("Wild pig", 532, Avatar5)}
            disabled={avatars.some((i) => i.code === 532)}
            style={{
              backgroundColor: avatars.some((i) => i.code === 532)
                ? "#BED754"
                : "#0052ff",
              cursor: avatars.some((i) => i.code === 532) ? "auto" : "pointer",
            }}
          >
            {avatars.some((i) => i.code === 532) ? "Comprado" : "Comprar"}
            <img src={IconPay} width={25} />
          </button>
        </div>
      </div>

      <div className="card">
        {!isImageLoaded && (
          <div className="loader">
            <div className="spiner" />
          </div>
        )}
        <img src={Avatar6} />
        <div className="section-card">
          <p>Gorilla #534</p>
          <button
            onClick={() => openModal("Gorilla", 534, Avatar6)}
            disabled={avatars.some((i) => i.code === 534)}
            style={{
              backgroundColor: avatars.some((i) => i.code === 534)
                ? "#BED754"
                : "#0052ff",
              cursor: avatars.some((i) => i.code === 534) ? "auto" : "pointer",
            }}
          >
            {avatars.some((i) => i.code === 534) ? "Comprado" : "Comprar"}
            <img src={IconPay} width={25} />
          </button>
        </div>
      </div>

      <Modal opened={opened} onClose={close} title="Pagar NFT">
        <div className="card-pay">
          <h2>{avatarSelect.name}</h2>
          <img src={avatarSelect.src} />
          <p>Los NFTS mas comprados por nuestros clientes en todo el mundo</p>
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

export default Cards;
