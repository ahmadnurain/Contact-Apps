import React from "react";
import { IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import "./Footer.css";
import { useHistory } from "react-router";
function Footer() {
  const history = useHistory();
  const hancleClick = () => {
    history.push("/AddContact");
  };
  return (
    <div className="footer">
      <IonFabButton className="button" onClick={hancleClick}>
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
    </div>
  );
}

export default Footer;
