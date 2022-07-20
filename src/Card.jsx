import React from 'react';

function Card(props) {
   
    return (

        <div className="cards">
            <div className="card">
                <img src={props.img} alt="fail to Load" className="card__img" />
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.disc}</h3>
                   
                        <a href={props.link} target="__blank">
                            <button className='button-41' >Watch Now</button>
                        </a>
                    

                </div>
            </div>
        </div>
    )
}

export default Card;