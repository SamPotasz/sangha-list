import React from 'react';
import moment from 'moment';

import './timeDisplay.styles.scss';

const TimeDisplay = ({startTime, endTime}) => (
    <span>
        {moment(startTime).format('LT')}-{moment(endTime).format('LT')}
    </span>
)

export default TimeDisplay;