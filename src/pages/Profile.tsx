import { IonAlert, IonButton, IonContent, IonPage } from '@ionic/react';
import React from 'react'
import Layout from '../components/Layout/Layout';

interface ProfileState {
    user: any,
    showAlert: boolean,
    alerTitle: string,
    alertSubtitle: string,
    alertMessage: string,
}

export default class Profile extends React.Component<{}, ProfileState>{
    constructor(props: any) {
        super(props);
        this.state = {
            user: null,
            showAlert: false,
            alerTitle: '',
            alertSubtitle: '',
            alertMessage: ''
        }
        this.logout = this.logout.bind(this)
    }

    async componentDidMount() {
        const user: any = localStorage.getItem('user-app-prova');
        if (!user) {
            this.setState({
                alerTitle: 'Non sei loggato',
                alertSubtitle: '',
                alertMessage: 'Devi accedere per entrare nell\'area profilo',
                showAlert: true
            })
        } else {
            const profile = JSON.parse(user);
            console.log('profile', profile);
        }
    }

    logout(){
        localStorage.removeItem('user-app-prova');
        window.location.href = '/'

    }

    render() {
        return (
            <IonPage>
                <IonContent>
                    <Layout title={'Profilo'}></Layout>
                    <IonButton size="small" fill="solid" onClick={this.logout}>
                        Logout
                    </IonButton>
                    <IonAlert isOpen={this.state.showAlert} cssClass='my-custom-class'
                        header={this.state.alerTitle}
                        subHeader={this.state.alertSubtitle}
                        message={this.state.alertMessage}
                        buttons={[{ text: 'LOGIN', handler: () => { window.location.href = '/login' } }]} />
                </IonContent>

            </IonPage>
        )
    }
}