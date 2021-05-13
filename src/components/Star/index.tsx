import React from 'react';
import Ratings from 'react-ratings-declarative';

const index: React.FC<{ value: number }> = ({ value }) => {
    return (
        <div>
            <Ratings rating={value || 0} widgetDimensions="17px" widgetSpacings="1px" widgetRatedColors="#fadb14">
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
            </Ratings>
        </div>
    );
};

export default index;
