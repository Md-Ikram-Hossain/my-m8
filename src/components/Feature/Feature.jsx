import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div >
            <p className="flex items-center"><FaCircleCheck className="text-green-500 mr-3" />{feature}</p>
        </div>
    );
};

export default Feature;