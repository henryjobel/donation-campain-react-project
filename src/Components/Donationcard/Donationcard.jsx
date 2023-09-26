import { Link } from "react-router-dom";

const Donationcard = ({ donationcard }) => {
    const {id, category, category_details_view_color, title, bg_color, image, text_bcl} = donationcard;
    return (
        <Link to={`/seedetails/${id}`}>
        <div style={{background:bg_color}} className="card  bg-base-100 shadow-xl lg:w-[312px] mb-12">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <div className="p-1 rounded-xl w-24 text-center" style={{background:text_bcl,color:category_details_view_color}}>
            <p>{category}</p>
            </div>
          <h2 style={{color:category_details_view_color}} className="card-title">
            {title}
          </h2>
          
        </div>
      </div>
        </Link>
    );
};

export default Donationcard;
