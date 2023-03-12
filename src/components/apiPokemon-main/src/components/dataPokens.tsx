// import { IonButton, IonChip, IonIcon, IonLabel } from '@ionic/react';
// import { newspaper } from 'ionicons/icons';
import { IonButton } from '@ionic/react';
import { useState, useEffect } from 'react';





function DataPokens() {

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
        
        
        <div className='centrar'>
            {datos ? (
                <div >
                    {datos.map((dato: any) => (
                        <div key={dato.name} >
                        
                        <IonButton href={`/post/${dato.name}`} >{dato.name}</IonButton>
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

export default DataPokens;
