import { IonAlert, IonButtons, IonContent, IonHeader, IonLoading, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router';
import Webinar from '../components/Webinar/Webinar';
import { CMS_STRAPI_PATH } from '../lib/path';
import './Page.css';


const Page: React.FC = () => {

  const { id } = useParams<{ id: string; }>();

  const [webinar, setWebinar] = useState(null);
  const [status_response, setStatusResponse] = useState(999)

  useEffect(() => {
    async function prova() {
      try {
        const response = await fetch(`${CMS_STRAPI_PATH}/webinars/${id}`);
        const webinar = await response.json()
        console.log('webinar', webinar);
        
        if (response.status === 200) {
          setWebinar(webinar);
        } else {
          setStatusResponse(500)
        }

      } catch (err) {
        console.error(err);
        setStatusResponse(500)
      }
    }
    prova();
    return function cleanup(){
      setWebinar(null)
    }
  }, [id]);

  if (!webinar) {
    return (
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
        <IonLoading
          cssClass='my-custom-class'
          isOpen={status_response === 999 ? true : false}
          message={'Sto caricando il webinar...'}
        />
        <IonAlert isOpen={status_response === 500} header={'Webinar non trovato'}
          message={'Sembra che questo webinar non esista'}
          buttons={[{
            text: 'HOME',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              window.location.href = '/'
            }
          },]} />
      </IonPage>
    )
  } else {
    return (
      <Webinar webinar={webinar} />
    );
  };
}


export default Page;
