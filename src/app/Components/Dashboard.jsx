import GrowthChart from './Dasboard/GrowthChart'

const AnalyticsData = {
    cards: [
        {
            title: "Active Users",
            value: "5556",
            linkTitle: "View All Users",
            link: "",
            img: "/users.png"
        },
        {
            title: "Total Buyers",
            value: "3480",
            linkTitle: "View All Buyers",
            link: "",
            img: "/buyers.png"
        },
        {
            title: "Total Ads",
            value: "459",
            linkTitle: "View All Ads",
            link: "",
            img: "/ads.png"
        },
        {
            title: "Total Sellers",
            value: "2924",
            linkTitle: "View All Sellers",
            link: "",
            img: "/sellers.png"
        }
    ],
    total: {
        title: "Total Earnings",
        value: "12,423,48.00",
        img: "/ernings.png"
    }
};

const Dashboard = () => {
    return (
        <div className="w-full flex flex-col items-start ">
            <h1 className="P4 text-[#F8F8F8]">Analytics</h1>
            {/* Graph Area */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-5">
                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-5">
                        {AnalyticsData.cards.map((card, index) => (
                            <div 
                                key={index}
                                className="px-4 py-2 rounded-[20px] flex flex-col gap-9"
                                style={{ 
                                    backgroundImage: `url(${card.img})`, 
                                    backgroundSize: "contain", 
                                    backgroundPosition: "center",
                                    backgroundRepeat:"no-repeat",
                                    backgroundPositionY:"bottom",
                                    backgroundColor:"white" ,
                                    borderStyle:"solid",
                                    borderWidth:'2px',
                                    borderColor: index === 0 ? '#199FB1' : index === 1 ? '#0FD43E' : index === 2 ? '#FFCC40' : '#FF0838'
                                }}
                            >
                                <p className="L4 text-left">{card.title}</p>
                                <h2 className="H1 text-center" style={{ color: index === 0 ? '#199FB1' : index === 1 ? '#0FD43E' : index === 2 ? '#FFCC40' : '#FF0838' }}>{card.value}</h2>
                                <a className="P5 text-right">{card.linkTitle}</a>
                            </div>
                        ))}
                    </div>

                    {/* Total Earnings */}
                    <div 
                        className="w-full px-4 py-2 rounded-[20px]"
                        style={{ 
                            backgroundImage: `url(${AnalyticsData.total.img})`, 
                            backgroundSize: "90%", 
                            backgroundPosition: "center",
                            backgroundRepeat:"no-repeat",
                            backgroundColor:"white"
                        }}
                    >
                        <p className="L4 text-left">{AnalyticsData.total.title}</p>
                        <h2 className="H1 text-center">{AnalyticsData.total.value}</h2>
                    </div>
                </div>
                <div className="bg-white rounded-[20px]">
                    <GrowthChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
