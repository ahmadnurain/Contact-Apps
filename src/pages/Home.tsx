import {
  IonPage,
  IonTitle,
  IonCard,
  IonContent,
  IonLoading,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import "./Home.css";

const Home: React.FC = () => {
  const [data, setData] = useState<MyDataType[]>([]);
  const [loading, setLoading] = useState(true);

  interface MyDataType {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    image: string;
    email: string;
  }

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((responseData) => {
        // Memastikan data yang diakses adalah properti "users"
        const userData = responseData.users || [];

        setData(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <IonPage>
      <div className="title">
        Contacts
      </div>
      <IonContent>
        <div className="header">
          <div className="footer">
            <Footer />
          </div>
        </div>

        {loading ? (
          <IonLoading isOpen={loading} message={"Loading..."} />
        ) : (
          data.map((user) => (
            <IonCard key={user.id} className="card-ion">  
              <img src={user.image} alt={user.firstName + " " + user.lastName} />
              <div className="content">
                <h1>{user.firstName + " " + user.lastName}</h1>
                <p>{user.phone}</p>
                <p>{user.email}</p>
              </div>
            </IonCard>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;