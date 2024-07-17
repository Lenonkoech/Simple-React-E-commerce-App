import React from 'react'

const Categories = ({ id, title, onCategoryClick }) => {
    return (
        <div key={id} onClick={() => onCategoryClick(id)}>{title}</div>
    );
}

export default Categories