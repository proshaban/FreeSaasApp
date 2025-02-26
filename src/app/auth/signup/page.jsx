import Image from "next/image";

export default function SignUp() {
    return (
        <div
            className="w-full h-full bg-[url('/auth-bg.png')] bg-cover bg-center bg-no-repeat px-4 flex justify-center items-center  border-box"
        >
            <div className="w-full max-width h-fit mt-[106px] mb-[106px] flex flex-col md:flex-row justify-between items-center bg-[#a5a5a538] backdrop-blur-[56.5px] rounded-[20px] relative p-6 md:py-12 md:px-12 gap-24">
                <div className="w-full  md:w-1/2 flex justify-center items-center">
                    <Image src='/Logo.png' height={250} width={250} className="object-contain w-1/2 md:w-[250px]" alt="Logo" />
                </div>

                <Image src='/line.png' width={0} height={0} className="hidden md:block h-[90%] w-fit absolute left-[50%] translate-x-[-50%]" alt="seperator" />

                {/* Login Form */}
                <div className="w-full  md:w-1/2 px-[50px] py-10 flex flex-col items-center gap-[60px] bg-[#ffffff] rounded-[20px] ">
                    <div className="w-full">
                        <h1 className="H1">Create New Account</h1>
                        <p className="P1 text-[#7F7F7F]">Welcome to Free shops App controller</p>
                    </div>

                    {/* input Area */}
                    <div className="w-full flex flex-col items-center gap-[22px]" >
                        {/* input Field */}
                        <div className="w-full flex flex-col">
                            <label htmlFor="name" className="L1">Name </label>
                            <input  id="name" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="L1">Email </label>
                            <input  id="email" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="phone" className="L1">Phone</label>
                            <input  id="phone" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" />
                        </div>

                        {/* pass */}
                        <div className="w-full flex flex-col">
                            <label htmlFor="password" className="L1">Password</label>
                            <input  id="password" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="Cpassword" className="L1">Confirm Password</label>
                            <input  id="Cpassword" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" />
                        </div>
                    </div>
                    <button className="w-fit py-2 px-8 flex justify-center items-center text-center L2 bg-[#199FB1] rounded-[10px] text-[#fff]">Create Account</button>
                    <a href="/auth/login" className="P3 text-[#7CB5EC]">Already have an account?</a>
                </div>
            </div>
        </div>
    );
}
