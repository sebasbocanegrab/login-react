import React from 'react';
import {   IonContent,  IonHeader,IonPage  } from '@ionic/react';
// import {   flagOutline } from 'ionicons/icons';

import Toolbar from '../components/Toolbar';

import DataPokens from '../components/dataPokens'

const ApiPoke: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>
          <Toolbar/>
      </IonHeader>
      <IonContent fullscreen >
        <DataPokens/>
      </IonContent>
    </IonPage>
  );
};

export default ApiPoke;
