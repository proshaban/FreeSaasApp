import Image from "next/image";

export default function Update() {
    return (
        <div
            className="w-full h-full bg-[url('/auth-bg.png')] bg-cover bg-center bg-no-repeat flex justify-center px-4 items-center  border-box"
        >
            <div className="w-full max-width h-fit mt-[106px] mb-[106px] flex flex-col justify-between items-center bg-[#a5a5a538] backdrop-blur-[56.5px] rounded-[20px] relative p-6 md:py-12 md:px-12">
                <div className=" w-full md:w-[812px] py-[72px] px-[55px] h-full flex flex-col gap-[45px] rounded-[20px] bg-[#ffffff] items-center text-center relative">
                    {/* skip */}
                    <div className="absolute P4 top-[11px] right-[16px] text-[#7F7F7F]">
                        Skip
                    </div>

                    {/* update photo area */}
                    <div className="flex flex-col gap-3 items-center">
                        <div className="flex justify-center items-center w-[143px] h-[143px] rounded-full bg-[#D9D9D9]">
                            <Image src='/camera.svg' width={72} height={56} alt="update-photo" />
                        </div>
                        <p className="P4 text-[#199FB1]">Upload Profile Pitchers</p>
                    </div>

                    {/* update form */}

                    <div className="w-full md:w-[502px] flex flex-col items-center gap-[22px]" >
                        {/* input Field */}
                        <div className="w-full flex flex-col items-start">
                            <label htmlFor="username" className="L1 text-[#7F7F7F]">User Name </label>
                            <input  id="username" className="w-full P2 border border-[#7f7f7f] p-3 rounded-[10px] " />
                        </div>

                        <div className="w-full flex flex-col items-start">
                            <label htmlFor="email" className="L1 text-[#7F7F7F]">Email </label>
                            <input  id="email" className="w-full P2 border border-[#7f7f7f] p-3 rounded-[10px] " />
                        </div>

                        <div className="w-full flex flex-col items-start">
                            <label htmlFor="phone" className="L1 text-[#7F7F7F]">Phone </label>
                            <input  id="phone" className="w-full P2 border border-[#7f7f7f] p-3 rounded-[10px] " />
                        </div>

                        <div className="w-full flex flex-col items-start">
                            <label htmlFor="password" className="L1 text-[#7F7F7F]">Password </label>
                            <input  id="password" className="w-full P2 border border-[#7f7f7f] p-3 rounded-[10px] " />
                        </div>

                        <a href="" className="text-[#7F7F7F] P1">Change Password</a>
                    </div>
                    <a href="/auth/signup" className="button-primary">Get Started</a>
                </div>
            </div>
        </div>
    );
}
