import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, caretDownCircle, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import Customer from './Customer';
import { deleteCustomer, findCustomerById, saveCustomer, searchCustomer } from './cutomerApi';

const CustomerEdit: React.FC = () => {

  const { name} = useParams<{ name: string;}>();
  const [customer, setCustomer] = useState<Customer>({});
  const history = useHistory();

  const routeMatch: any = useRouteMatch("/page/customer/:id");
  const id = routeMatch?.params?.id;

  useEffect(() => {
    search();
  }, [history.location.pathname])

  const search = async () => {
      if(id === 'new'){
        setCustomer({});
      } else{
        let result  = await findCustomerById(id);
        setCustomer(result);
      }
  }
  const save = async () =>{
    await saveCustomer(customer);
    history.push('/page/customers');
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
        
        <IonTitle>{id == 'new' ? 'New Customer' : 'Edit Customer'}</IonTitle>
       
        <IonCard>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Name</IonLabel>
                        <IonInput onIonChange={e => customer.name = String(e.detail.value)}
                        value={customer.name}></IonInput>
                     </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Name</IonLabel>
                        <IonInput onIonChange={e => customer.email = String(e.detail.value)}
                        value={customer.email}></IonInput>  
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Name</IonLabel>
                        <IonInput onIonChange={e => customer.phone = String (e.detail.value)}
                        value={customer.phone}></IonInput>                   
                    </IonItem>
                </IonCol>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Name</IonLabel>
                        <IonInput onIonChange={e => customer.address =  String(e.detail.value)}
                        value={customer.address}></IonInput>                   
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonCard>

        <IonButton color="success" fill='solid' onClick={save} >
            <IonIcon icon={checkmark} slot='end'></IonIcon>
            Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;


