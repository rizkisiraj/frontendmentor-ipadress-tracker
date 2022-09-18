import { useState } from "react";
import Dashboard from "../dashboard/dashboard.component";
import Form from "../input/form.component";

const Container = ({addressInfo, setAddressInfo, setPosition}) => {
    const [loader, setLoader] = useState(false);


    return(
        <header className="w-full bg-pattern bg-no-repeat bg-cover h-64 md:h-52 flex justify-center py-8 relative">
            <section className="w-full mb-5">
                <h1 className="text-center text-3xl font-bold text-white mb-4">IP Adress Tracker</h1>
                <Form setLoader={setLoader} setAddressInfo={setAddressInfo} setPosition={setPosition}/>
            </section>
            <Dashboard loader={loader} addressInfo={addressInfo} />
        </header>
    )
}

export default Container;