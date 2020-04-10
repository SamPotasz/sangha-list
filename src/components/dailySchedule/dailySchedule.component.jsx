import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import SanghaRow from '../sanghaRow/sanghaRow.component';
import { selectDaySanghas } from '../../redux/sangha/sangha.selector';

const DailySchedule = ({ day:[dayName], sanghas }) => {

    return(
        <div>
    <h2>{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</h2>
    <Table bordered responsive='md' striped>
        <thead>
            <th>Start</th>
            <th>End</th>
            <th>Sangha</th>
            <th>Teacher</th>
            <th>Org.</th>
            <th>Donate</th>
            <th>Join</th>
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
    sanghas: selectDaySanghas(ownProps.day[0])(state)
})

export default connect(mapStateToProps)(DailySchedule);