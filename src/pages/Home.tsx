import { IonCard, IonContent, IonIcon, IonImg, IonModal, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { closeSharp } from "ionicons/icons";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import './Home.css'

interface HomeState {
    data: any,
    item: any,
    open: boolean,
    ingredient: any,
    measure: any,
    dataFiltered: any,
    filterText: any
}
export default class Home extends React.Component<{}, HomeState>{
    constructor(props: any) {
        super(props)
        this.state = {
            data: [],
            item: {},
            open: false,
            ingredient: [],
            measure: [],
            dataFiltered: [],
            filterText: ''
        }
        this.openPopUp = this.openPopUp.bind(this);
        this.filterWebinar = this.filterWebinar.bind(this)
    }

    async componentDidMount() {
        const response = await fetch('https://cms.btcongress-cloud.com/webinars/');
        const json = await response.json();
        this.setState({
            data: json
        });
    }

    openPopUp(drink: any) {

        const elencoIngredienti: any = [];
        const elencoMeasure: any = []
        for (const [key, value] of Object.entries(drink)) {
            if (value && key.indexOf('strIngredient') > -1) {
                elencoIngredienti.push(value);
            }
            if (value && key.indexOf('strMeasure') > -1) {
                elencoMeasure.push(value)
            }
        }
        this.setState({
            item: drink,
            open: true,
            ingredient: elencoIngredienti,
            measure: elencoMeasure
        })
    }
    filterWebinar(e: any) {
        const { value } = e.target
        console.log(value);
        const filterData = this.state.data
        this.setState({
            filterText: value,
            dataFiltered: value.length > 0 ? filterData.filter((item: any) => item.webinar_title.indexOf(value) > -1) : this.state.data
        })
    }
    render() {
        return (
            <IonPage>
                <Layout title={'Home'}>
                </Layout>

                <IonContent>
                    <input type="text" onChange={this.filterWebinar} placeholder="Cerca webinar per nome" className="search" />
                    <div className="container">
                        {(this.state.dataFiltered.length === 0 ? this.state.data : this.state.dataFiltered).map((item: any, index: number) => (
                            <Link to={`/webinar/${item.id}`} replace={true} >
                                <IonCard key={index}>
                                    <img src={`https://cms.btcongress-cloud.com${item.webinar_image?.url}`} alt={item.webinar_image?.url} title={item.webinar_title} style={{ maxHeight: 94, width: '100%', objectFit: "cover" }} />
                                    <h6 style={{ margin: "10px", textAlign: "center" }}>{item.webinar_title}</h6>
                                </IonCard>
                            </Link>

                        ))}
                    </div>

                </IonContent>
            </IonPage>

        )
    }
}