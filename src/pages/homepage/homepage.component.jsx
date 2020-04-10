import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DailySchedule from '../../components/dailySchedule/dailySchedule.component';
import { selectSanghaValues, selectDays } from '../../redux/sangha/sangha.selector';

import './homepage.styles.scss';

const HomePage = ({sanghas, days}) => (
    <div className='homepage'>
        <h1 className='title'>Find your sangha</h1>
        {
            Object.entries(days).map(
                day => <DailySchedule day={day} /> )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sanghas: selectSanghaValues,
    days: selectDays
})

export default connect(mapStateToProps)(HomePage);