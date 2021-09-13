import { IonContent, IonHeader, IonIcon, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import './Parecipants.css'
import moment from 'moment'
import { arrowDown, closeSharp } from "ionicons/icons";
import { CMS_STRAPI_PATH } from "../../lib/path";

interface PartecipantsProps {
    partecipants: any,
    features: any,
    title: string,
    schedule: any,
    primaryCol: any
}
interface PartecipantsState {
    isOpen: boolean
    profile: any
}

export default class Partecipants extends React.Component<PartecipantsProps, PartecipantsState>{
    constructor(props: any) {
        super(props);
        this.state = {
            isOpen: false,
            profile: null
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this)
    }
    openModal(evt: any) {
        console.log(evt);

        this.setState({
            profile: evt,
            isOpen: true
        })
    }
    closeModal() {
        this.setState({
            profile: null,
            isOpen: false
        })
    }

    render() {
        const { primaryCol, title, schedule, partecipants } = this.props

        return (
            <div className="container-participants">
                <div className="hero-container" style={{ backgroundColor: primaryCol }}>
                    <h6 >{title}</h6>
                    <h6>{moment(schedule).format('lll')}</h6>
                    <div className="container-list">
                        {(partecipants || []).map((participant: any, index: number) => {
                            return (
                                <div className="participants-card" key={index} onClick={() => this.openModal(participant)}>
                                    <img src={`${CMS_STRAPI_PATH}${participant.biography?.Avatar?.url}`} alt={`${participant.biography.Nome} ${participant.biography.Cognome}`} />
                                    <p><small>{participant.biography.Nome} {participant.biography.Cognome}</small></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <IonModal isOpen={this.state.isOpen}>
                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>
                                {this.state.profile?.biography.Nome} {this.state.profile?.biography.Cognome}
                            </IonTitle>
                            <IonIcon icon={closeSharp} slot="end" onClick={this.closeModal} />
                        </IonToolbar>
                    </IonHeader>
                    <IonContent>
                        <div style={{ textAlign: "center" }}>
                            <img style={{ maxWidth: '100px', margin: '10px' }} src={`${CMS_STRAPI_PATH}${this.state.profile?.biography?.Avatar?.url}`} alt={`${this.state.profile?.biography.Nome} ${this.state.profile?.biography.Cognome}`} />
                            <div className="container-accordions">
                                <div className="accordion">
                                    <div className="button-accordion">
                                        Biografia
                                        <IonIcon icon={arrowDown} />
                                    </div>
                                </div>
                                <div className="accordion">
                                    <div className="button-accordion">
                                        Information
                                        <IonIcon icon={arrowDown} />
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    </IonContent>
                </IonModal>
            </div>
        );
    }
}