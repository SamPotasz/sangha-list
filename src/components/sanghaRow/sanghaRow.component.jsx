import React from 'react';
import LinkableText from '../linkableTableData/linkableTableData.component';

const SanghaRow = ({sangha}) => {
    const {time, name, teacher, organization, orgUrl, registration, registrationUrl} = sangha;
    
    return(<tr>
        <td>{time}</td>
        <td>{name}</td>
        <td>{teacher}</td>
        <td><LinkableText text={organization} url={orgUrl} /></td>
        <td><LinkableText text={registration} url={registrationUrl} /></td>
    </tr>);
}

export default SanghaRow;