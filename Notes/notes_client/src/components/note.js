/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/main.css'

import React from "react";

const Note = ({titulo,conteudo,onclick}) =>{
return(
    <div className="note">
        <div className="note-header">
            <a href="#" className="note-title remove-a">{titulo}</a>
            <a href="#" className="close remove-a" onClick={onclick}>X</a>
        </div>
        <div className="note-content">
            <p>{conteudo}</p>
        </div>
    </div>
)
}

export {Note}