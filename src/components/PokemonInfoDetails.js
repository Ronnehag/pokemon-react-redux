import React from 'react'


const styles = {

}



export default function PokemonInfoDetails({ id, name, stats, types, weight, height, base_experience, sprites }) {

    function printStats(){
        // Loop stats
    }


return (
        <div className="container">
            <h2>#{id} {name}</h2>
            <br/><br/>
            {printStats()}
        </div>
    )
}
