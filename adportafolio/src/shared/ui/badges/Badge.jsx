import React from 'react'

export default function Badge({ color, name }) {

    console.log(color)

    const colorMap = {
        primary: 'badge badge-outline badge-primary',
        secondary: 'badge badge-outline badge-secondary',
        accent: 'badge badge-outline badge-accent'
    }

    const colorBadge = colorMap[color] ?? 'badge badge-primary'

    console.log(colorBadge)

    return (
        <div>
            <div className={`${colorBadge} rounded-md text-white font-extrabold py-2 px-3`}>
                <p>{name}</p>
            </div>
        </div>
    )
}