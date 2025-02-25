import Image from "next/image";

export default function Login() {
    return (
        <div
            className="w-full h-full bg-[url('/auth-bg.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center  border-box"
        >
            <div className="w-full max-width h-fit mt-[106px] mb-[106px] flex justify-between items-center bg-[#a5a5a538] backdrop-blur-[56.5px] rounded-[20px] relative py-12 px-12 gap-24">
                <div className="w-1/2 flex justify-center items-center">
                    <Image src='/Logo.png' height={250} width={250} className="object-contain" alt="Logo" />
                </div>

                <Image src='/line.png' width={0} height={0} className="h-[90%] w-fit absolute left-[50%] translate-x-[-50%]" alt="seperator" />

                {/* Login Form */}
                <div className="w-1/2 px-[50px] py-10 flex flex-col items-center gap-[60px] bg-[#ffffff] rounded-[20px] ">
                    <div className="w-full">
                        <h1 className="H1">Login</h1>
                        <p className="P1 text-[#7F7F7F]">Welcome to Free shops App controller</p>
                    </div>

                    {/* input Area */}
                    <div className="w-full flex flex-col items-center gap-[34px]" >
                        {/* input Field */}
                        <div className="w-full flex flex-col">
                            <label htmlFor="username" className="L1">User Name </label>
                            <input  id="username" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] " />
                        </div>
                        {/* pass */}
                        <div className="w-full flex flex-col">
                            <label htmlFor="password" className="L1">Password</label>
                            <input  id="password" className="P2 border border-[#7f7f7f] p-3 rounded-[10px] " />
                        </div>

                        <a href="" className="text-[#7F7F7F] P1">Forget Password</a>

                        <button className="w-fit py-2 px-8 flex justify-center items-center text-center L2 bg-[#199FB1] rounded-[10px] text-[#fff]">Login</button>
                    </div>
                    <a href="/auth/signup" className="P3 text-[#7CB5EC]">Create New Account</a>
                </div>
            </div>
        </div>
    );
}
