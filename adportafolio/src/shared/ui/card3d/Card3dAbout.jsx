import React from 'react'

export default function Card3dHover({ title, body, img, color, icon }) {
    return (
        <div>
            <div className="hover-3d h-full">
                {/* content */}
                <div className="card bg-base-100  shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src={`/img/${img}`}
                            alt={`Imagen-${title}`}
                            className="rounded-xl w-full h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h4 className={`card-title badge badge-${color}`}>
                            <i className={icon}></i>
                            {title}
                        </h4>
                        <p>{body}</p>

                    </div>
                </div>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
