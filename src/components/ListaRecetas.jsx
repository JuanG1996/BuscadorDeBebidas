import React,{useContext} from 'react'
import { RecetasContext } from '../context/RecetasContext';
import Receta from './Receta';

const ListaRecetas = () => {

    //Extraer las recetas
    const { recetas } = useContext( RecetasContext );

    if(Object.keys(recetas).length === 0) return null;

    return ( 
        <div className="row mt-5">
            {recetas.map(receta=>(
                <Receta 
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
     );
}
 
export default ListaRecetas;