/* eslint-disable react/jsx-no-undef */
import { Link } from 'react-router-dom';
import './pokeshow.css'

// eslint-disable-next-line react/prop-types
function Pokeshow ( {name, image, id} ) {

    return (

        <div className='pokemon'>
            <Link to={ `/pokemon/${id}`}>
                <div className='poke-name'>{name}</div>
                <div>
                <img className='pokemon-image' src={image} />
                </div>
            </Link>
           
        </div>
       
    )


}


export default Pokeshow;