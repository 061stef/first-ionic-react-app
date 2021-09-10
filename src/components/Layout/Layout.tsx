import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

interface LayoutProps {
    title: string
}
interface LayoutState {
    data: any
}

export default class Layout extends React.Component<LayoutProps, LayoutState>{
    constructor(props: any) {
        super(props);
        this.state ={
            data: 'send'
        }
    }
    componentDidMount(){
    
    }
    
    render() {
        return (
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{this.props.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
        )
    }
}