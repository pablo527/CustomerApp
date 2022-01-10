import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, caretDownCircle, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Customer from './Customer';
import { deleteCustomer, saveCustomer, searchCustomer } from './cutomerApi';

const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  const [clients, setClient] = useState<Customer[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname])

  const search = async () => {
     let data = await searchCustomer();
      setClient(data);

  }
  const removeCustomer = async (idDelete:string) => {
      await deleteCustomer(idDelete);
      search();
  }
  const addCustomer = () => {
    history.push('/page/customer/new');
  }
  const editCustomer = (id:string) => {
    history.push('/page/customer/'+ id)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Customer App</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonTitle>Customer App</IonTitle>
        <IonButton onClick={addCustomer} color="primary" fill='clear'>
            <IonIcon icon={add} slot='end'></IonIcon>
            Add Client</IonButton>
        <IonCard>
            <IonGrid>
                <IonRow>
                    <IonCol class="ion-align-self-start">
                        Name
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        Email
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        Phone
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        Address
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        Action
                    </IonCol>
                </IonRow>
               {
                   clients.map((client:Customer) =>
                    <IonRow>
                    <IonCol class="ion-align-self-start">
                        {client.name}
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        {client.email}
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        {client.phone}
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        {client.address}
                    </IonCol>
                    <IonCol class="ion-align-self-start">
                        <IonButton onClick={()=> editCustomer(String(client.id))} color="primary" fill='clear'>
                            <IonIcon icon={pencil} slot="icon-only" />
                        </IonButton>
                        <IonButton onClick={()=> removeCustomer(String(client.id))} color="danger" fill='clear'>
                            <IonIcon icon={close} slot="icon-only" />
                        </IonButton>
                    </IonCol>
                </IonRow>

                )
               }
            </IonGrid>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;


