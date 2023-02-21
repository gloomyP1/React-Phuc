import { useParams } from 'react-router-dom'
import { Films } from '../shared under/ListOfFilms';
import { useState } from 'react';
// import { Icon } from 'react-materialize'
// import ModalCase from './ModalCase';
export default function DetailFilm() {
	const [isOpen, setIsOpen] = useState(false);
	const userName = useParams();
	const film = Films.find(obj => {
		return obj.id == userName.id;
	});
	/*let cost = player.cost.toLocaleString();*/
	return (
         <div className="container">
         <div className="product-card">
           <div className="badge"></div>
           <div className="product-tumb">
           <img src={`../${film.img}`} alt={film.title} />
           </div>
           <div className="product-details">
             <h4>{film.title}</h4>
             <div className="product-price">Year: {film.year}</div>
             <p>Description: {film.desc}</p>
             <div className="product-bottom-details"></div>
           </div>
         </div>
       </div>
	)
}