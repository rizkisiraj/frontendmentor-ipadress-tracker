import { useState } from "react";
import arrow from "../../images/icon-arrow.svg"
import { getAddress } from "../../utils/axios/axios";

const Form = ({ setAddressInfo, setPosition, setLoader }) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoader(true);
            const { data } = await getAddress(input);
            const { ip,location,isp } = data;
            setPosition([location.lat, location.lng]);
            setAddressInfo({
                ip, 
                isp, 
                city: location.city,
                region: location.region,
                timezone: location.timezone,
            })
            setLoader(false);
            setInput('');
        } catch(e) {
            alert('Incorrect input. Write in 0.0.0.0 format');
            console.log(e);
        }

    }
    return (
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xs md:max-w-lg flex justify-between rounded-lg overflow-hidden">
                    <input className="focus:outline-none block flex-1 px-3" type="text" name="searchIp" id="searchIp" value={input} onChange={handleChange} placeholder="Search for any IP address or domain"/>
                    <button className="bg-black h-12 px-5 block hover:bg-slate-500 transition-colors" type="submit">
                        <img className="w-full" src={arrow} alt="arrow" />
                    </button>
        </form>
    )
}

export default Form;