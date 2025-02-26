'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async () => {
        if (!formData.username || !formData.password) {
            setAlert({ open: true, message: "All fields are mandatory", severity: "error" });
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: formData.username,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.status === 201) {
                localStorage.setItem("accessToken", data.accessToken);
                setAlert({ open: true, message: "Login successful!", severity: "success" });
                setTimeout(() => router.push("/auth/welcome"), 1000);
            } else {
                setAlert({ open: true, message: data.message || "Invalid credentials", severity: "error" });
            }
        } catch (error) {
            setAlert({ open: true, message: "Something went wrong!", severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full bg-[url('/auth-bg.png')] bg-cover bg-center bg-no-repeat flex justify-center px-4 items-center border-box">
            <div className="w-full max-width h-fit mt-[106px] mb-[106px] flex flex-col md:flex-row justify-between items-center bg-[#a5a5a538] backdrop-blur-[56.5px] rounded-[20px] relative p-6 md:py-12 md:px-12 gap-24">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image src='/Logo.png' height={250} width={250} className="object-contain w-1/2 md:w-[250px]" alt="Logo" />
                </div>

                <Image src='/line.png' width={0} height={0} className="hidden md:block h-[90%] w-fit absolute left-[50%] translate-x-[-50%]" alt="seperator" />

                <div className="w-full md:w-1/2 px-[50px] py-10 flex flex-col items-center gap-[60px] bg-[#ffffff] rounded-[20px]">
                    <div className="w-full">
                        <h1 className="H1">Login</h1>
                        <p className="P1 text-[#7F7F7F]">Welcome to Free Shops App Controller</p>
                    </div>

                    <div className="w-full flex flex-col items-center gap-[34px]">
                        <div className="w-full flex flex-col">
                            <label htmlFor="username" className="L1">User Name</label>
                            <input id="username" type="text" className="P2 border border-[#7f7f7f] p-3 rounded-[10px]" value={formData.username} onChange={handleChange} />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="password" className="L1">Password</label>
                            <input id="password" type="password" className="P2 border border-[#7f7f7f] p-3 rounded-[10px]" value={formData.password} onChange={handleChange} />
                        </div>

                        <a href="" className="text-[#7F7F7F] P1">Forgot Password?</a>

                        <button onClick={handleSubmit} disabled={loading} className="w-fit py-2 px-8 flex justify-center items-center text-center L2 bg-[#199FB1] rounded-[10px] text-[#fff]">
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                        </button>
                    </div>
                    <a href="/auth/signup" className="P3 text-[#7CB5EC]">Create New Account</a>
                </div>
            </div>

            <Snackbar
                open={alert.open}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                autoHideDuration={4000}
                onClose={() => setAlert({ ...alert, open: false })}>
                <Alert severity={alert.severity} onClose={() => setAlert({ ...alert, open: false })}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
    );
}