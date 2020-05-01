import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrTimezone } from '../../redux/timezone/timezone.selector';

import './timeDisplay.styles.scss';

const TimeDisplay = ({startTime, endTime, timezone}) => {
    // const baseZone = "America/Chicago"
    const zoneName = timezone ? timezone.name : "GMT";    

    // console.log(zoneName);
    // console.log(startTime.getTimezoneoffset);
    // const date = new Date();
    // const thisMoment = moment(startTime).year(date.getFullYear()).month(date.getMonth());
    // console.log("Start: " + startTime);
    // const offset = thisMoment.utcOffset();
    // console.log("Converted: " + thisMoment.format('LT z'));
    // thisMoment.add(-offset, 'minutes')
    // console.log("Converted: " + thisMoment.format('LT z'));
    // // thisMoment.utcOffset(0);
    // console.log("No offset: " + thisMoment.format('LT z'));
    // console.log("UTC: " + moment.utc(startTime).year(2020).month(4).date(17).format('LT z'));
    // console.log("Zone: " + moment.parseZone(startTime).year(2020).month(4).date(17).add(-offset, 'minutes').format('LT z'));
    // console.log("A/C: " + moment.tz(startTime, "America/Chicago").year(2020).month(4).date(17).format('LT z'));
    // console.log("GMT: " + moment.tz(startTime, "GMT").year(2020).month(4).date(17).format('LT z'));
    // console.log("-----")

    // return(<span>
    //     {(startTime)} - {(endTime)}
    // </span>)

    // return(<span>
    //     {moment.utc(startTime).format('HH:mm')}
    //     - {moment.utc(endTime).format('HH:mm')}
    // </span>)

    return(<span>
        {moment.tz(startTime, zoneName).year(2020).month(4).format('h:mm')}
        - {moment.tz(endTime, zoneName).year(2020).month(4).format('LT')}
    </span>)
}

const mapStateToProps = createStructuredSelector({
    timezone: selectCurrTimezone
})

export default connect(mapStateToProps)(TimeDisplay);