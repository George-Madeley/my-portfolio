import React from 'react'
import './Tile.css'

import Info from './info/Info'
import Expansion from './expansion/Expansion'

export default function Tile(props: any) {return (
        <div className='projects-tile'>
            <Info
                id={props.id}
                date={props.date}
                name={props.name}
                link={props.link}
                linkText={props.linkText}
                languages={props.languages}
                isSelected={props.isSelected}
                handleChange={props.handleChange}
            />
            <input type='checkbox' checked={props.isSelected} readOnly />
            <Expansion
                stars={props.stars}
                commits={props.commits}
            >
                {props.children}
            </Expansion>
        </div>
    )
}