import React from 'react';

const SeeAllDetailCard = ({detail}) => {
    const {id, category, category_details_view_color, title, bg_color, image } = detail;
    return (
        <div>
            <h1>{category
            }</h1>
        </div>
    );
};

export default SeeAllDetailCard;