import { FaShippingFast } from "react-icons/fa";
import { IoChatbubbleOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { GiPayMoney } from "react-icons/gi";

const InfoContent = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-3">
            <div className="flex items-center text-xl w-60 mx-auto"><span className="text-4xl p-5"><FaShippingFast /></span>
                <p><span className="font-bold">Free Delivery</span> from $50</p>
            </div>
            <div className="flex items-center text-xl w-60 mx-auto"><span className="text-4xl p-5"><IoChatbubbleOutline></IoChatbubbleOutline></span>
                <p><span className="font-bold">99% Customer</span> Feedbacks</p>
            </div>
            <div className="flex items-center text-xl w-60 mx-auto"><span className="text-4xl p-5"><TfiReload /></span>
                <div>
                    <p><span className="font-bold">365 Days</span></p>
                    <p>for free return</p>
                </div>
            </div>
            <div className="flex items-center text-xl w-60 mx-auto"><span className="text-4xl p-5"><GiPayMoney /></span>
                <div><p><span className="font-bold">Payment</span> </p>
                <p>Secure System</p></div>
            </div>
        </div>
    );
};

export default InfoContent;