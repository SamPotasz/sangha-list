import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import SanghaRow from '../sanghaRow/sanghaRow.component.jsx';
import { selectDaySanghas, selectFilteredSanghasForDay } from '../../redux/sangha/sangha.selector';

import './dailySchedule.styles.scss';

const DailySchedule = ({ day:[dayName], sanghas }) => {

    return(
    <div className='daily-schedule'>
        <h2>{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</h2>
        <Table bordered responsive='md' striped>
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Sangha</th>
                    <th>Teacher</th>
                    <th>Org.</th>
                    <th>Join</th>
                </tr>
            </thead>
            <tbody>
            {
                sanghas.map( sangha => <SanghaRow sangha={sangha} />)
            }
            </tbody>
        </Table>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    // sanghas: selectFilteredSanghasForDay(state.)
    sanghas: selectDaySanghas(ownProps.day[0])(state)
})

export default connect(mapStateToProps)(DailySchedule);