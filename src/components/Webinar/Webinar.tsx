import { IonButtons, IonContent, IonHeader, IonLoading, IonMenuButton, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import ReactPlayer from 'react-player'
import ActionButton from "../ActionButton/ActionButton";
import ExtraItem from "../ExtraItem/ExtraItem";
import MediaItem from "../MediaItem/MediaItem";
import Partecipants from "../Partecipants/Partecipants";

interface WebinarProps {
    webinar: any
}
interface WebinarState {
    webinar: any,
    player_link: string
}

export default class Webinar extends React.Component<WebinarProps, WebinarState>{
    constructor(props: any) {
        super(props);
        this.state = {
            webinar: null,
            player_link: ''
        }
    }
    async componentDidMount() {
        const { player, player_link }: any = this.props.webinar;
        this.setState({
            webinar: this.props.webinar
        })
        if (player === 'Youtube_code') {
            console.log('here');

            this.setState({
                player_link: `https://www.youtube.com/watch?v=${player_link}`
            })
        }
        if (player === 'Vimeo_code') {
            this.setState({
                player_link
            })
        }

    }
    handleStatusChange() {

    }

    render() {
        
        if (!this.state.webinar) {
            return (
                <IonPage>
                    <IonHeader>
                        <IonToolbar>
                            <div style={{ display: "flex" }}>
                                <IonButtons slot="start">
                                    <IonMenuButton />
                                </IonButtons>
                                <IonTitle></IonTitle>
                            </div>

                        </IonToolbar>
                    </IonHeader>
                    <IonLoading cssClass='my-custom-class'
                        isOpen={true}
                        message={'Sto caricando il webinar...'} />
                </IonPage>
            )
        }
        const slideOpts = {
            slidesPerView: this.state.webinar?.extra.length > 1 ? 2 : 1,
            initialSlide: 1,
            speed: 400,
        };
        const slideOptsMedia = {
            slidesPerView: this.state.webinar?.Media.length > 1 ? 2 : 1,
            initialSlide: 1,
            speed: 400,
        };
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <div style={{ display: "flex" }}>
                            <IonButtons slot="start">
                                <IonMenuButton />
                            </IonButtons>
                            <IonTitle>{this.state.webinar.webinar_title}</IonTitle>
                        </div>

                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div>
                        <ReactPlayer url={this.state.player_link} controls={true} width={'100%'} height="210px" />
                    </div>
                    <ActionButton primaryCol={this.state.webinar.config_primaryCol} />
                    <Partecipants partecipants={this.state.webinar?.Participants} features={this.state.webinar.Features} primaryCol={this.state.webinar.config_primaryCol} title={this.state.webinar.webinar_title} schedule={this.state.webinar.webinar_schedule} />
                    {this.state.webinar?.extra.length ?
                    <div id={'product'}>
                        <h2 style={{ textAlign: "center" }}>Products</h2>
                        <IonSlides pager={true} options={slideOpts} className="--bullet-background">
                            {(this.state.webinar?.extra || []).map((item: any, index: number) => (
                                <IonSlide key={index}>
                                    <ExtraItem item={item} />
                                </IonSlide>
                            ))}
                        </IonSlides>

                    </div> : null}
                    {this.state.webinar?.Media.length ?
                    <div id={'product'}>
                        <h2 style={{ textAlign: "center" }}>Media</h2>
                        <IonSlides pager={true} options={slideOptsMedia} className="--bullet-background">
                            {(this.state.webinar?.Media || []).map((item: any, index: number) => (
                                <IonSlide key={index}>
                                    <MediaItem item={item} type={item.media_type} />
                                </IonSlide>
                            ))}
                        </IonSlides>

                    </div> : null}
                    
                </IonContent>
            </IonPage>
        )
    }

}