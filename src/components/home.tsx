// import { IonButton, IonChip, IonIcon, IonLabel } from '@ionic/react';
// import { newspaper } from 'ionicons/icons';
// import { IonButton } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';


function Home() {

    const [datos, setDatos] = useState<any>(null);

    async function obtenerDatos() {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const datos = await respuesta.json();
        setDatos(datos.results);
    }

    useEffect(() => {
        obtenerDatos();
    }, []);


    // console.log(datos);
    
    
    return (
        
        
        <div >
            {datos ? (
                <div >
                    {datos.map((dato: any) => (
                        <div key={dato.name} >
                        <div >{dato.name} <br/>                        
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${((dato.url).substring(34)).replace('/', '.')}png`} alt="" />
                        </div>
                            <br/>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}

        </div>
       
    );
}

export default Home;