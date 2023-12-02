import { useEffect, useState } from "react";
import "./SendEmail.css";

const SendEmail = () => {
  var expression =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
  };

  useEffect(() => {
    if (expression.test(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [value]);

  return (
    <div className="container-send-mail">
      <input
        placeholder="Escibe tu correo"
        value={value}
        onChange={handleChange}
      />
      <button
        disabled={disabled}
        className={disabled ? "button-email-disabled" : "button-email"}
        onClick={() => setValue("")}
      >
        Enviar
      </button>
    </div>
  );
};

export default SendEmail;
