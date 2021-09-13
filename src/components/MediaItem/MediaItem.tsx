import React from "react";
import { CMS_STRAPI_PATH } from "../../lib/path";
import './MediaIteam.css';

interface MediaItemProps {
    item: any,
    type: string
}

interface MediaItemState {

}

class MediaVideo extends React.Component<MediaItemProps, {}>{
    render(){
        return(
            <div className="container-media">
                
                <img src={`${CMS_STRAPI_PATH}${this.props.item.video_cover.url}`}  alt={this.props.item.video_cover.url} style={{maxWidth: '100%'}}/>
                <h6 style={{color: '#000'}}>{this.props.item.media_title}</h6>
            </div>
        )
    }
}

class MediaPdf extends React.Component<MediaItemProps, {}>{
    render(){
        return(
            <div className="container-media">
                
                <img src={'https://webinars.ginendo.org/pdf-icon.svg'} alt={'pdf'} style={{width: 60}} />
                <h6 style={{color: '#000'}}>{this.props.item.media_title}</h6>
            </div>
        )
    }
}

class MediaDoc extends React.Component<MediaItemProps, {}>{
    render(){
        return(
            <div className="container-media">
                {this.props.type}
            </div>
        )
    }
}

export default class MediaItem extends React.Component<MediaItemProps, MediaItemState> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render() {
       
        
        if (this.props.type === 'Video') {
            return (
                <MediaVideo item={this.props.item} type={this.props.type} />
            )
        }
        if(this.props.type === 'Pdf'){
            return (
                <MediaPdf item={this.props.item} type={this.props.type} />
            )
        }
        return (
            <MediaDoc item={this.props.item} type={this.props.type} />
        )
    }
}

