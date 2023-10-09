import { IonPage, IonTitle, IonCard, IonContent } from "@ionic/react";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Home.css";

const Home: React.FC = () => {
  interface MyDataType {
    id: number;
    title: number;
    userId: number;
  }
  const [data, setData] = useState<MyDataType[]>([]);
  useEffect(() => {
    fetch("https://contact-apps.up.railway.app/api/v1/contact")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <IonPage>
      <IonContent color={"medium"}>
        <div className="header">
          <IonTitle className="title">Contacts</IonTitle>
          <div className="footer">
            <Footer />
          </div>
        </div>

        <IonCard className="card-ion">
          <img src="/src/image/john-doe.jpg" alt="" />
          <div className="content">
            <h1>Jhon Doe</h1>
            <p>0812312312</p>
          </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
