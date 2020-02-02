import React, { useState } from 'react';
import logo from '../logo.svg';
import '../star.css'
import ReactStarts from 'react-stars';
import axios from 'axios';

const Card = (props) => {

    const [checked, setChecked] = useState(false);

    const makeFav = (e) => {

        if( checked === false ) {

            alert('Made Favourite');
            setChecked(true);
        }
        if( checked === true ) {

            alert('Made Unfavourite');
            setChecked(false);
        }
        alert(e.target.value);
        axios.post('/setfavourite',{poduct_id: e.target.value});
    };

    return (
        <div style = {{borderRadius:'5px',boxShadow:'5px 5px 5px gray',width:'300px', height:'200px', border:'1px solid gray', display:'flex', marginRight:'1rem', marginBottom:'1rem'}}>
            <div>
                <a target="_blank" href="img_forest.jpg">
                    <img src={logo} alt="Forest" style = {{ width:'80px', height:'150px'}}/>
                </a>
            </div>
            <div>
                <div style = {{display:'flex'}}>
                    <p style = {{marginRight:'2rem', float:'right'}}><b><u> {props.name}</u> </b>
                    <input class="star" type="checkbox" title="fav" value = {props.id} 
                        id = 'cb'
                        onChange = {makeFav}/>
                    </p>
                </div>
                <p style = {{marginRight:'2rem'}}> {props.des} </p>
            </div>
        </div>
    )
}

export default Card;
