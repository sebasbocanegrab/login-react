import './Toolbar.css';
import { IonAvatar, IonToolbar, IonTitle,IonImg } from '@ionic/react';
const Toolbar: React.FC = () => {
    return (
        <div id="toolbar">
            <IonToolbar>
                <IonAvatar slot="start" id='avatar'>
                    <IonImg src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png" id='img'></IonImg>
                </IonAvatar>
                <IonTitle>Api Pokemon</IonTitle>
            </IonToolbar>
        </div>
    );
};
export default Toolbar;