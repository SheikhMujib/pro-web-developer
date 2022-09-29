import React from 'react';

const Activity = (props) => {
    const { handleAddToCart, activity } = props;
    const { name, intro, duration, img, quantity } = activity;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{intro}</p>
                    <p className="card-text">Time required: <strong>{duration}hours</strong></p>
                </div>
                <button onClick={() => handleAddToCart(activity)} type="button" className="btn btn-primary m-3">Add to list</button>
            </div>
        </div>
    );
};

export default Activity;