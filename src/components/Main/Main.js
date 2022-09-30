import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';

const Main = () => {
    const [activities, setActivities] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToCart = (activity) => {
        console.log(activity);
        const newCart = [...cart, activity];
        setCart(newCart);
    }
    return (
        <div className="container-fluid">
            <div className='row'>
                {/* Activities container */}
                <div className='col-sm-9 mt-5 mb-5 px-5'>
                    <h1 className='text-primary'><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon> Pro Web Developer</h1>
                    <h4 className='my-5'>Select Today's Practice Plan</h4>
                    <div className='row row-cols-1 row-cols-sm-3 g-4'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                                handleAddToCart={handleAddToCart}
                            ></Activity>)
                        }
                    </div>
                </div>
                {/* Cart container */}
                <div className='col-sm-3 bg-light'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Main;