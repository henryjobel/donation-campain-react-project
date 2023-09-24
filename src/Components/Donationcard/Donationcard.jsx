
const Donationcard = ({ donationcard }) => {
    const { category, category_details_view_color,title,donation_price,bg_color } = donationcard;
    return (
        <div  style={{ background: bg_color }}>
            <h1 style={{ color: category_details_view_color }}>{title}</h1>
            <h3 style={{ color: category_details_view_color }} >{donation_price}</h3>
            <button className="btn btn-outline" style={{ color: category_details_view_color }}>{category}</button>
        </div>
    );
};

export default Donationcard;
