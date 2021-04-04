import React, {useContext, useState} from 'react'

import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {

    //useStates
    const [busqueda, guardarBusqueda] = useState({
        nombre: "",
        categoria: ""
    });

    //Extraer info del context
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    //Funcion para leer los contenidos
    const obtenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }


    return ( 
        <form
            className="col-12"
            onSubmit={e=>{
                e.preventDefault();
                buscarRecetas(busqueda);
                guardarConsultar(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Aqui puedes buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>


                <div className="col-md-4">
                    <select 
                        name="categoria" 
                        className="form-control"
                        onChange={obtenerDatosReceta}
                    >
                            <option value="">Selecciona una categoria --</option>
                            {
                                categorias.map(categoria=>(
                                    <option value={categoria.strCategory} key={categoria.strCategory}>{categoria.strCategory}</option>
                                ))
                            }
                    </select>
                </div>


                <div className="col-md-4">
                    <input type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar bebidas"
                    />
                </div>


            </div>
        </form>
     );
}
 
export default Formulario;