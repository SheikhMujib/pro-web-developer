import React, { useEffect, useState } from 'react';

const Main = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div class="container">
            <div class="row">
                {/* Activities container */}
                <div class="col-sm-9 bg-light">
                    <div class="row">
                        <div class="col-sm">col-sm</div>
                        <div class="col-sm">col-sm</div>
                        <div class="col-sm">col-sm</div>
                    </div>
                </div>
                {/* Cart container */}
                <div class="col-sm-3 bg-warning">col-sm-3</div>
            </div>
        </div>
    );
};

export default Main;