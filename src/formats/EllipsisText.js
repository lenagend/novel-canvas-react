import React from 'react';

const EllipsisText = ({ text, maxLength }) => {
    const addEllipsis = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
    };

    return <div>{addEllipsis(text, maxLength)}</div>
}

export default EllipsisText;
