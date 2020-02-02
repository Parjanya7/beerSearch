import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Home = () => {
  
    const [ search, setSearch ] = useState('');
    const [ card, setCard ] = useState([]);
    const [ card2, setCard2] = useState([]);

    useEffect( () => {
        getProductsDetails();
    }, [] );
    
    const searchBeer = () => {

        if( search === '' ) 
            alert('Enter some Beer please.');
        else {
            setSearch('');
            axios.get('/search', {params:{name: search}})
            .then( res => {
                
                card.length = 0;
                card2.length = 0;

                setCard( card.concat(<Card id = { res.data.id } name = { res.data.name } des = { res.data.description }/>) );
            }).catch(err => console.log(err) );
        }
    };

    const getProductsDetails = () => {
        
        axios.get('/products')
        .then( res => {

        card.length = 0;
        card2.length = 0;

        console.log( res.data );
        let arr = [];
        let arr2 = [];
        let j = 0;
        let k = 0;

        for(let i = 0; i < res.data.length; i++ ) {

            if( j <= 2 ) {
                arr[i] = <Card id = { res.data[i].id } name = { res.data[i].name } des = { res.data[i].description }/>;
                j++;
            }
            else {
                arr2[k] = <Card id = { res.data[i].id } name = { res.data[i].name } des = { res.data[i].description }/>;
                k++;
                j++;
            }
        }

        setCard( card.concat( arr ) );
        setCard2( card2.concat( arr2) );

        }).catch( err => console.log( err ));
    };

    return (
        <div>
            <div style = {{textAlign:'center', marginBottom:'2rem'}}>
                <input
                    value = {search}
                    placeholder = 'Search for Beer..'
                    onChange = { e => setSearch(e.target.value) }
                    style = {{ boxShadow:' -1px 2px 5px gray', borderRadius:'5px',marginLeft:'2rem',width: '500px', marginTop:'2rem', height:'30px', textAlign:'center', textAlignLast:'center'}}
                />  
                <button
                    onClick = {searchBeer}
                    style = {{ height: '40px', width:'80px', borderRadius:'5px',marginRight:'1rem', backgroundColor:'royalblue', color:'white', padding:'6px',}}
                >
                    Search
                </button>
                <button
                    onClick = {getProductsDetails}
                    style = {{ height: '40px', width:'80px', borderRadius:'5px',marginRight:'1rem', backgroundColor:'royalblue', color:'white', padding:'6px',}}
                >
                    Close
                </button>
            </div>
            <div style = {{textAlign:'center', marginLeft:'15rem'}}>
                <div style = {{display:'flex', textAlign:'center'}}>
                    {card}
                </div>
                <div style = {{display:'flex', textAlign:'center'}}>
                    {card2}
                </div>
            </div>
        </div>
    )
}

export default Home;
