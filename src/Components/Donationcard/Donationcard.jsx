import { Link } from "react-router-dom";

const Donationcard = ({ donationcard }) => {
    const {id, category, category_details_view_color, title, bg_color, image } = donationcard;
    return (
        <Link to={`/seedetais/${id}`}>
        <div style={{background:bg_color}} className="card  bg-base-100 shadow-xl w-[312px] mb-12">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <button style={{color:category_details_view_color}} className="btn btn-outline">{category}</button>
          <h2 style={{color:category_details_view_color}} className="card-title">
            {title}
          </h2>
          
        </div>
      </div>
        </Link>
    );
};

export default Donationcard;
