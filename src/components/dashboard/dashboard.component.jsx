const dumpData = [
    {
        title: "IP ADRESS",
        value: '192.201.3456'
    },
    {
        title: "LOCATION",
        value: 'Brooklyn, NY 10001'
    },
    {
        title: "TIMEZONE",
        value: 'UTC -05.00'
    },
    {
        title: "ISP",
        value: 'SPACEX, STARLINK'
    },
]



const Dashboard = ({addressInfo, loader}) => {
    
    return (
        <section className="rounded-xl absolute w-4/5 grid md:grid-cols-2 xl:grid-cols-4 gap-3 py-6 px-4 bg-white bottom-0 translate-y-[180px] md:translate-y-3/4 xl:translate-y-2/4 shadow-lg z-[999]">
            {
                loader ? (
                    <>
                    <div className="border-r border-r-DarkGray last:border-none">
                        <div className="w-14 animate-pulse h-3 mb-3 bg-slate-400">
                        </div>
                        <div className="w-4/5 animate-pulse h-7 bg-slate-400">
                        </div>
                    </div>
                    <div className="border-r border-r-DarkGray last:border-none">
                        <div className="w-14 animate-pulse h-3 mb-3 bg-slate-400">
                        </div>
                        <div className="w-4/5 animate-pulse h-7 bg-slate-400">
                        </div>
                    </div>
                    <div className="border-r border-r-DarkGray last:border-none">
                        <div className="w-14 animate-pulse h-3 mb-3 bg-slate-400">
                        </div>
                        <div className="w-4/5 animate-pulse h-7 bg-slate-400">
                        </div>
                    </div>
                    <div className="border-r border-r-DarkGray last:border-none">
                        <div className="w-14 animate-pulse h-3 mb-3 bg-slate-400">
                        </div>
                        <div className="w-4/5 animate-pulse h-7 bg-slate-400">
                        </div>
                    </div>
                    </>
                ) 

                : <>
                    <div key="ipAdress" className="border-r border-r-DarkGray last:border-none">
                                    <h4 className="text-xs text-DarkGray font-semibold mb-3">IP ADDRESS</h4>
                    <p className="font-bold text-base md:text-xl">{addressInfo.ip}</p>
                    </div>
                    <div key="location" className="border-r border-r-DarkGray last:border-none">
                                    <h4 className="text-xs text-DarkGray font-semibold mb-3">LOCATION</h4>
                    <p className="font-bold text-base md:text-xl">{`${addressInfo.city}, ${addressInfo.region}`}</p>
                    </div>
                    <div key="timezone" className="border-r border-r-DarkGray last:border-none">
                                    <h4 className="text-xs text-DarkGray font-semibold mb-3">TIMEZONE</h4>
                    <p className="font-bold text-base md:text-xl">{`UTC ${addressInfo.timezone}`}</p>
                    </div>
                    <div key="isp" className="border-r border-r-DarkGray last:border-none">
                                    <h4 className="text-xs text-DarkGray font-semibold mb-3">ISP</h4>
                    <p className="font-bold text-base md:text-xl">{`${addressInfo.isp}`}</p>
                    </div>
            </>
            }            
            
        </section>
    )
}

export default Dashboard;