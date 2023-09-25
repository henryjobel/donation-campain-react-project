

import {useLoaderData, useParams} from "react-router-dom";
import SeeAllDetailCard from "./SeeAllDetailCard";

const SeeDetails = () => {
    
    const {id}= useParams()
    const idInt = parseInt(id)
    const details = useLoaderData()
    const detail = details.find(detail => detail.id === idInt)
    console.log(detail)

    return (
        <div>
            <SeeAllDetailCard detail={detail}></SeeAllDetailCard>
        </div>
    );
};

export default SeeDetails;