import React from 'react';

import LinkableText from '../linkableTableData/linkableTableData.component';
import TimeDisplay from '../timeDisplay/timeDisplay.component';

const SanghaRow = ({sangha}) => {
    const {startTime, endTime, name, teacher, organization, orgUrl, registration, registrationUrl} = sangha;
    
    return(<tr>
        <td><TimeDisplay startTime={startTime} endTime={endTime} /></td>
        <td>{name}</td>
        <td>{teacher}</td>
        <td><LinkableText text={organization} url={orgUrl} /></td>
        <td><LinkableText text={registration} url={registrationUrl} /></td>
    </tr>);
}

export default SanghaRow;