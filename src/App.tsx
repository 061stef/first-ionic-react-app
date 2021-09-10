import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import React from 'react';

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
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login ';
import Page from './pages/Page';

interface AppState{
  user: any
}


export default class App extends React.Component<{}, AppState>{

  constructor(props: any){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    const user = localStorage.getItem('user-app-prova');
    console.log(user);
    if(user){
      this.setState({
      user: JSON.parse(user)
    })
    }
    
  }

  render(){
    return (
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true} component={this.state.user ? Home : Login} />
              <Route path="/profile" exact={true}>
                <Profile />
              </Route>
              <Route path="/webinar/:id" exact={true} >
                <Page />
              </Route>
              <Route path="/login" component={Login} exact={true} />
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    );
  }

};


