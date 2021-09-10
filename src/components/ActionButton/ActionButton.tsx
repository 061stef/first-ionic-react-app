import { IonIcon } from "@ionic/react";
import { chatbox, documentAttach, fileTraySharp, informationCircle } from "ionicons/icons";
import React from "react";
import './ActionButton.css'

interface ActionButtonProps {
    primaryCol: any
}

interface ActionButtonState {

}

export default class ActionButton extends React.Component<ActionButtonProps,ActionButtonState> {
    constructor(props: any){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="container-buttons" style={{backgroundColor: this.props.primaryCol}}>
                <a href="#chat">
                  <IonIcon icon={chatbox} size={'large'} />  
                </a>
                <a href="#extra">
                <IonIcon icon={documentAttach} size={'large'} />
                </a>
                <a href="#product">
                <IonIcon icon={fileTraySharp} size={'large'}/>
                </a>
                <a href="#form">
                <IonIcon icon={informationCircle} size={'large'}/>
                </a>
            </div>
        )
    }
}