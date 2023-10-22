import { IonPage, IonTitle, IonCard, IonContent, IonLoading } from "@ionic/react";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Home.css";

const Home: React.FC = () => {
  const [data, setData] = useState<MyDataType[]>([]);
  const [loading, setLoading] = useState(true);

  interface MyDataType {
    id: number;
    nama: string;
    nomorHp: string;
    foto: string;
  }

  useEffect(() => {
    fetch('/api/v1/contact')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
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

        {loading ? (
          <IonLoading isOpen={loading} message={"Loading..."} />
        ) : (
          data.map((contact) => (
            <IonCard className="card-ion" key={contact.id}>
              {/* Decode the base64 image and display it */}
              <img
                src={`/api/v1/contact/${contact.id}/foto`} alt={contact.nama}
              />
              <div className="content">
                <h1>{contact.nama}</h1>
                <p>{contact.nomorHp}</p>
              </div>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
