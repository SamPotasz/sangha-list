import React from 'react';

const SanghaRow = ({sangha: {Time, name, teacher, organization}}) => (
    <tr>
        <td>{Time}</td>
        <td>{name}</td>
        <td>{teacher}</td>
        <td>{organization}</td>
        {/* <td>Donate</td>
        <td>Join</td> */}
    </tr>
)

export default SanghaRow;