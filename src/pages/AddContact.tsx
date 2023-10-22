import React, { useEffect, useState } from "react";
import { IonInput, IonButton, IonItem, IonCard } from "@ionic/react";
import "./AddContact.css";
import { useHistory } from "react-router";

function AddContact() {
  const history = useHistory();
  const handleBakClick = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <IonCard className="card">
        <form action="" className="form">
          <h1>New Contact</h1>
          <IonInput name="name" label="Name" labelPlacement="floating" fill="outline" placeholder="Enter name" className="input"></IonInput>
          <IonInput name="phonenumber" label="Phone number" labelPlacement="floating" fill="outline" placeholder="Enter number" className="input" type="number"></IonInput>
          <input type="file" />
        </form>
        <div className="button">
          <IonButton className="button-contact" type="submit">
            Save
          </IonButton>
          <IonButton className="button-contact" onClick={handleBakClick}>
            Back
          </IonButton>
        </div>
      </IonCard>
    </div>
  );
}

export default AddContact;
