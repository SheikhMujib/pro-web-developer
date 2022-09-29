import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Activity from '../Activity/Activity';

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
                    <h1 className='text-white'><FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon> Pro Web Developer</h1>
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
                <div className='col-sm-3 bg-primary text-white'>
                    {/* Personal Info */}
                    <div class="row mt-5">
                        <div class="col-md-5">
                            <img className='img-fluid rounded-circle' src="https://mujibmart.com/wp-content/uploads/2022/05/CEO-Mujib.jpg" alt="" />
                        </div>
                        <div class="col-md-7">
                            <div class="row row-cols-1 text-center mt-4">
                                <div class="col"><h3>Sheikh Mujib</h3></div>
                                <div class="col"><p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Barisal, Bangladesh.</p></div>
                            </div>
                        </div>
                    </div>
                    {/* Practice Plan Details */}
                    <div class="row row-cols-1 mt-5">
                        <div class="col"><h5>Practice Plan Details</h5></div>
                        <div class="col"><h6>Practice time: {cart.length}</h6></div>
                        <div class="col"><h6>Break time: </h6></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;