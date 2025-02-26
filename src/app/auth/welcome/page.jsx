import Image from "next/image";

export default function Welcome() {
    return (
        <div
            className="w-full h-full bg-[url('/auth-bg.png')] bg-cover bg-center bg-no-repeat flex justify-center px-4 items-center  border-box"
        >
            <div className="w-full max-width h-fit mt-[106px] mb-[106px] flex flex-col justify-between items-center bg-[#a5a5a538] backdrop-blur-[56.5px] rounded-[20px] relative p-6 md:py-12 md:px-12">
                <div className=" w-full md:w-[812px] py-[72px] px-[55px] h-full flex flex-col gap-[45px] rounded-[20px] bg-[#ffffff] items-center text-center">
                    <div className="w-full  md:w-1/2 flex justify-center items-center">
                        <Image src='/Logo.png' height={250} width={250} className="object-contain w-1/2 md:w-[160px]" alt="Logo" />
                    </div>
                    {/* welcome */}
                    <div className="w-full  flex flex-col items-center ">
                        <h1 className="H0">Welcome</h1>
                        <h2 className="H1 text-[#FF8553]">to the Free Shops App Admin Panel</h2>
                    </div>

                    <p className="max-w-[705px] P4 text-[#7F7F7F]">Manage and monitor all aspects of your app seamlessly from one place. Use the tools below to get started.</p>

                    <a href="/auth/update" className="button-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
}
