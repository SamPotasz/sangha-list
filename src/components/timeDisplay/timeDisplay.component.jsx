import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrTimezone } from '../../redux/timezone/timezone.selector';

import './timeDisplay.styles.scss';

const TimeDisplay = ({startTime, endTime, timezone}) => {
    const zoneName = timezone ? timezone.name : "GMT";
    
    return(<span>
        { moment.tz(startTime, zoneName).format('LT') }
        - {moment.tz(endTime, zoneName).format('LT')}
    </span>)
}

const mapStateToProps = createStructuredSelector({
    timezone: selectCurrTimezone
})

export default connect(mapStateToProps)(TimeDisplay);