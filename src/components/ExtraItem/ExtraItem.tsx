import { IonCard, IonCardContent } from "@ionic/react";
import React from "react";
import './ExtraItem.css'

interface ExtraItemProps{
    item: any
}

export default class ExtraItem extends React.Component<ExtraItemProps, {}>{
    constructor(props: any){
        super(props);
        this.state = {

        }
    }

    render(){
        console.log(this.props.item);
        
        return(
            <IonCard>
                <IonCardContent>
                    <img src={`https://cms.btcongress-cloud.com${this.props.item.item_media[0].url}`} alt={''} />
                    <h3>{this.props.item.item_title}</h3>
                </IonCardContent>
            </IonCard>
        )
    }
}