import { IonButton, IonCard, IonContent, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

interface LoginState {
    email: string,
    password: string,
}

export default class Login extends React.Component<{}, LoginState>{
    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    async login(e: any) {
        e.preventDefault();
        const user: any = {
            email: this.state.email,
            password: this.state.password
        }
        localStorage.setItem('user-app-prova', JSON.stringify(user));
        window.location.href = '/';
    }

    onChange(e: any) {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                this.setState({
                    email: value
                });
                break;
            case 'password':
                this.setState({
                    password: value
                })
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <IonPage>
                <IonToolbar>
                    <IonTitle>
                        Login
                    </IonTitle>
                </IonToolbar>
                <IonContent>
                    <IonCard>
                        <form onSubmit={this.login}>
                            <IonItem>
                                <IonLabel>
                                    Email
                                </IonLabel>
                                <IonInput type="email" onIonInput={(e: any) => this.onChange(e)} name="email" />
                            </IonItem>
                            <IonItem>
                                <IonLabel>
                                    Password
                                </IonLabel>
                                <IonInput type="password" onIonInput={(e: any) => this.onChange(e)} name="password" />
                            </IonItem>
                            <IonButton className="" type="submit" >Login</IonButton>
                        </form>
                    </IonCard>
                </IonContent>
            </IonPage>
        )
    }
}