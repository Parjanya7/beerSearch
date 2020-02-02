import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Fav = () => {

    const [ card, setCard ] = useState([]);

    useEffect( () => {

        axios.get('/favourites')
        .then( res => {

            console.log( res.data);
            card.length = 0;
            let arr = [];

            for( let i = 0; i < res.data.length; i++ ) {
                arr[i] = <Card id = { res.data[i].id } name = { res.data[i].name } des = { res.data[i].description }/>;
            }
            setCard( card.concat( arr ) );
        })
        .catch( err => console.log(err));
    }, []);

    return (
        <div style = {{display:'flex', marginTop:'2rem', textAlign:'center', marginLeft:'14rem'}}>
             {card}  
        </div>
    )
}

export default Fav;
