import react from 'react';

const itemListContainer = ({CervezasNombre,CervezaDescripcion}) => {
    return(
        <div>
            <h3>{CervezasNombre}</h3>
            <p>{CervezaDescripcion}</p>
        </div>
        
    );
};


export default itemListContainer;