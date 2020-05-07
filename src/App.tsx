import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  IonPage
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LoginPage from './pages/login/login-page';
import RegisterPage from './pages/login/login-page';
import ChorePage from './pages/chore/chore-page';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonPage>
        <IonRouterOutlet>
          <Route path="/login-page" component={LoginPage} exact={true} />
          <Route path="/register-page" component={RegisterPage} exact={true} />
          <Route path="/chore-page" component={ChorePage} exact={true} />
          <Route path="/" render={() => <Redirect to="/login-page" />} exact={true} />
        </IonRouterOutlet>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
