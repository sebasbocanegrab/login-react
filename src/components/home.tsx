// import { IonButton, IonChip, IonIcon, IonLabel } from '@ionic/react';
// import { newspaper } from 'ionicons/icons';
// import { IonButton } from '@ionic/react';
import React from 'react';
import { useState, useEffect } from 'react';
import './home.css'


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
                <div className='mapeo'>
                    {datos.map((dato: any) => (
                        <a rel="noopener noreferrer" href={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${((dato.url).substring(34)).replace('/', '.')}png`}  target="_blank">
                        <div key={dato.name} >
                        <div className='contenedor'>{dato.name} <br/>                        
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${((dato.url).substring(34)).replace('/', '.')}png`} alt="" />
                        </div>
                            <br/>
                        </div>
                        </a>
                    ))}
                </div>
            ) : (
                <p>Cargando datos...</p>
            )}

        </div>
       
    );
}

export default Home;