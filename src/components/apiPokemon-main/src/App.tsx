import {   Redirect, Route, } from 'react-router-dom';
import {
  IonApp,
  // IonIcon,
  IonRouterOutlet,
  // IonTabBar,
  // IonTabButton,
  // IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
// import {  chatboxEllipsesOutline,   constructOutline,   homeOutline, schoolOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import ApiPoke from './pages/apiPoke';
import Post from './pages/post/[post]';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/apipoke">
            <ApiPoke />
          </Route>
          <Route exact path="/post/:id" render={(props) => <Post parameter={props.match.params.id} />} />
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
    
    </IonReactRouter>
  </IonApp>
);

export default App;
