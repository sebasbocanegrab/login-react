import React from 'react';
import {   IonContent,  IonHeader,IonPage  } from '@ionic/react';
// import {   flagOutline } from 'ionicons/icons';

import Toolbar from '../components/Toolbar';
import './Tab1.css';

const Tab1: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
        Login

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
