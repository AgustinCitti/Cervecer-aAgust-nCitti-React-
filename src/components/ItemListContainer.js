import react from 'react';
import ItemCount from '../components/ItemCount/ItemCount.jsx';
const itemListContainer = ({CervezasNombre,CervezaDescripcion}) => {
    const onAdd =(quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }
    return(
        <div>
            <h3>{CervezasNombre}</h3>
            <p>{CervezaDescripcion}</p>
            <ItemCount initial={0} stock={24} onAdd={onAdd}/>
        </div>
        
    );
};


export default itemListContainer;