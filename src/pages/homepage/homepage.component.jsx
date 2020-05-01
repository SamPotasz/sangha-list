import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SearchBar from '../../components/searchBar/searchBar.component';
import DailySchedule from '../../components/dailySchedule/dailySchedule.component';
import TzPicker from '../../components/tzPicker/tzPicker.component';

import { selectDays } from '../../redux/sangha/sangha.selector';

import './homepage.styles.scss';

const HomePage = ({ days }) => (
    <div className='homepage'>
        <h1 className='title'>Find your sangha</h1>
        <TzPicker />
        <SearchBar />
        {
            Object.entries(days)
                // .filter(
                //     day => day[0] == 'daily')
                .map(
                    day => <DailySchedule key={day} day={day} /> )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    days: selectDays
})

export default connect(mapStateToProps)(HomePage);