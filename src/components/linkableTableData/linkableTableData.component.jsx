import React from 'react';

const LinkableText = ({ text, url }) => {
    {
        return(url ?
        <a href={`${url}`} target="_blank">{ text }</a> 
            : <span>{text}</span>); 
    }
}

export default LinkableText;