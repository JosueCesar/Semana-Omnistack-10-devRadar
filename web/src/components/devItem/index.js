import React from 'react';
import './styles.css';

function DevItem({ dev }) {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://www.github.com/${dev.github_username}`} target="blank">Acessar Perfil GitHub</a>
        </li>
    );
}

export default DevItem;