import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonPage } from '@ionic/react';
import Toolbar from '../../components/Toolbar';

interface PostProps {
  parameter: string;
}

const Post: React.FC<PostProps> = ({ parameter }) => {
  const [datos, setDatos] = useState<any[]>([]);
  // const [data, setPoke] = useState<any[]>([]);

  async function obtenerDatos() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const datos = await respuesta.json();
    setDatos(datos.results);
  }

  useEffect(() => {
    obtenerDatos();
  }, []);
  console.log(datos);

  let result = datos?.find((item: any) => item.name === `${parameter}`);
  // console.log(result.url);

  return (
    <IonPage>
      <IonHeader>
        <Toolbar />
      </IonHeader>
      <IonContent fullscreen>
        <IonButton href="/apipoke">Volver</IonButton>
        <br />
        👉Pokemon: &nbsp;{parameter}
        {datos.length ? (
          <div>
            <img src={result ?  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${((result.url).substring(34)).replace('/', '.')}png`  : 'No encontrado'} alt="" />
            
            
          </div>
        ) : (
          <p>Cargando datos...</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Post;
