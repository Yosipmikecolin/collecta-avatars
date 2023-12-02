import "./FrontPage.css";
import Portada from "../../assets/avatars-portada.png";
import SendEmail from "../send-email/SendEmail";

export const FrontPage = () => {
  return (
    <section className="container-front-page">
      <div className="dividor">
        <div className="column-1">
          <h1>
            Colecciona tus avatars <br />
            favoritos.
          </h1>
          <p>
            Con Collecta, puedes obtener más de +1 millón de avatares, de
            120.000 artistas visuales fácilmente!
          </p>
          <SendEmail />
        </div>
        <div className="column-2">
          <img src={Portada} width={700} />
        </div>
      </div>
    </section>
  );
};

export default FrontPage;
