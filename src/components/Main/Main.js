import React from 'react';

const Main = () => {
    return (
        <div class="container">
            <div class="row">
                {/* Activities container */}
                <div class="col-sm-9 bg-primary">
                    <div class="row">
                        <div class="col-sm-4">col-sm</div>
                        <div class="col-sm-4">col-sm</div>
                        <div class="col-sm-4">col-sm</div>
                    </div>
                </div>
                {/* Cart container */}
                <div class="col-sm-3 bg-warning">col-sm-3</div>
            </div>
        </div>
    );
};

export default Main;