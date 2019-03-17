import React from 'react'

export default function PokemonCard({ name, img, id }) {
    let upperName = name.substr(0, 1).toUpperCase() + name.substr(1)
    return (
        <section className="poke-card">
            <img src={img} alt={name} /><br />
            <div><small>#{id} - {upperName}</small></div>
        </section>
    )
}
