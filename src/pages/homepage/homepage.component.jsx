import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SearchBar from '../../components/searchBar/searchBar.component';
import DailySchedule from '../../components/dailySchedule/dailySchedule.component';
import { selectSanghaItems, selectDays } from '../../redux/sangha/sangha.selector';

import './homepage.styles.scss';

const HomePage = ({sanghas, days}) => (
    <div className='homepage'>
        <h1 className='title'>Find your sangha</h1>
        <SearchBar />
        
        {
            Object.entries(days).map(
                day => <DailySchedule key={day} day={day} /> )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sanghas: selectSanghaItems,
    days: selectDays
})

export default connect(mapStateToProps)(HomePage);