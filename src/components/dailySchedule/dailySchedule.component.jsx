import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import SanghaRow from '../sanghaRow/sanghaRow.component.jsx';
import { selectFilteredSanghasForDay } from '../../redux/sangha/sangha.selector';

import './dailySchedule.styles.scss';

const DailySchedule = ({ day:[dayName], sanghas }) => (
    
    <div className='daily-schedule'>
        
        <h2>{dayName.charAt(0).toUpperCase() + dayName.slice(1)}</h2>
        
        {
            sanghas.length > 0 ?
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
                    sanghas.map( sangha => <SanghaRow key={sangha.id} sangha={sangha} />)
                }
                </tbody>
            </Table>
            : <span><i>no sanghas found</i></span>

        }
        
    </div>
)

//https://github.com/reduxjs/reselect/issues/140
const mapStateToProps = (state, ownProps) => {

    const thisDay = ownProps.day[0];
    const getFiltered = selectFilteredSanghasForDay(thisDay);

    return (state, ownProps) => ({
        sanghas: getFiltered(state)
    })

    // sanghas: selectFilteredSanghasForDay(ownProps.day[0])(state)
    // sanghas: selectDaySanghas(ownProps.day[0])(state)
}

export default connect(mapStateToProps)(DailySchedule);