import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Cart = ({ cart }) => {
    let totalTime = 0;
    for (const activity of cart) {
        totalTime = totalTime + activity.duration;
    }
    const [breakTime, setBreakTime] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();
        // for(const breakTime in storedCart){
        //     const addedBreak = breakTime.find(breakTime => breakTime.breakTime === breakTime)
        //     console.log(addedBreak)
        // }
    }, [])

    const handleBreakTime = (event) => {
        console.log(event);
        const time = event.target.innerText;
        setBreakTime(time);
        addToDb(breakTime)
    }
    return (
        <div className='position-sticky top-0'>
            {/* Personal Info */}
            <div className="row mt-5">
                <div className="col-md-5">
                    <img className='img-fluid rounded-circle' src="https://mujibmart.com/wp-content/uploads/2022/05/CEO-Mujib.jpg" alt="" />
                </div>
                <div className="col-md-7">
                    <div className="row row-cols-1 text-center mt-4">
                        <div className="col"><h3>Sheikh Mujib</h3></div>
                        <div className="col"><p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Barisal, Bangladesh.</p></div>
                    </div>
                </div>
            </div>
            <div class="row row-cols-md-3 text-center bg-white mx-2 mt-4 rounded">
                <div class="col">
                    <p><span className='fs-3 fw-semibold'>79</span>kg</p>
                    <p>Weight</p>
                </div>
                <div class="col">
                    <p><span className='fs-3 fw-semibold'>5.10</span>ft</p>
                    <p>Height</p>
                </div>
                <div class="col">
                    <p><span className='fs-3 fw-semibold'>34</span>yrs.</p>
                    <p>Age</p>
                </div>
            </div>
            {/* Add a Break */}
            <div class="text-center mt-4">
                <h4>Add A Break</h4>
                <div class="row row-md-1 btn-group bg-white px-2 py-3">
                    <div class="col"><button id='b10' onClick={(event) => handleBreakTime(event)} type="button" class="btn btn-outline-secondary">10m</button></div>
                    <div class="col"><button id='b20' onClick={(event) => handleBreakTime(event)} type="button" class="btn btn-outline-secondary">20m</button></div>
                    <div class="col"><button id='b30' onClick={(event) => handleBreakTime(event)} type="button" class="btn btn-outline-secondary">30m</button></div>
                    <div class="col"><button id='b40' onClick={(event) => handleBreakTime(event)} type="button" class="btn btn-outline-secondary">40m</button></div>
                </div>
            </div>
            {/* Practice Plan Details */}
            <div className="row row-cols-1 mt-5">
                <div className="col"><h4>Practice Plan Details</h4></div>
                <div className="col"><h5>Total Practice Time: {totalTime}hours</h5></div>
                <div className="col"><h5>Break Time: {breakTime}</h5></div>

            </div>
        </div>
    );
};

export default Cart;