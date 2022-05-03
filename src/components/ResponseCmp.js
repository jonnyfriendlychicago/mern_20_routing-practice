import { useParams, Link } from "react-router-dom";
// import {useState} from 'react'; 

function ResponseCmp()  {

    const {charSet, fontyColor, backColor} = useParams(); 
    console.log("charSet parameters: ", charSet)

    return (
        <div>
            <h1>Check it out</h1>
            {/* <p>charSet: {charSet}</p> */}
            {/* <p>fontyColor: {fontyColor}</p> */}
            
            {/* { charSet.length >= 5 ?
                        <p style = {{backgroundColor: "{fontyColor}"}}>The charstring is 5 or more characters: {charSet}</p> 
                        :
                        <p>The charstring is less than 5 characters: {charSet}</p>
            }      */}

            {/* { isNaN(charSet) ?
                        <p>The charset is {charSet}</p>
                        :
                        <p>The number is {charSet}</p>
                        
            }   */}
            
            <p style= { 
                        (fontyColor ? {color: fontyColor, backgroundColor: backColor }: null)
                        
                        
                        
                        
                        }>The 
            { isNaN(charSet) ?
                         " characer set " 
                        :
                        " number "
                        
            }  
            is {charSet}</p>
                         
            <Link to="/">Home</Link>
        </div>    
    )
}

export default ResponseCmp; 