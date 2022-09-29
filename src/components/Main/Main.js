import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                {/* Activities container */}
                <div className='col-sm-9 mt-5 mb-5'>
                    <h1>Pro Web Developer</h1>
                    <h5 className='my-5'>Select Today's Practice Plan</h5>
                    <div className='row row-cols-1 row-cols-sm-3 g-4'>
                        {
                            activities.map(activity => <Activity
                                key={activity.id}
                                activity={activity}
                            ></Activity>)
                        }
                    </div>

                </div>
                {/* Cart container */}
                <div className='col-sm-3 bg-primary'>col-sm-3</div>
            </div>
        </div>
    );
};

export default Main;