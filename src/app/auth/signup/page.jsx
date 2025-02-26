'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";  // Import Snackbar
import CircularProgress from "@mui/material/CircularProgress";

export default function SignUp() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", Cpassword: "" });
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ open: false, message: "", severity: "success" }); // Add `open` property
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async () => {
        if (formData.password !== formData.Cpassword) {
            setAlert({ open: true, message: "Passwords do not match", severity: "error" });
            return;
        }
        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.Cpassword) {
            setAlert({ open: true, message: "All Fields Are mendatory", severity: "error" });
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/registration`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: formData.name,
                    firstName: formData.name.split(" ")[0],
                    lastName: formData.name.split(" ")[1] || "",
                    phone: formData.phone,
                    email: formData.email,
                    password: formData.password,
                }),
            });
            const data = await response.json();

            if (data.message === "Already Exist") {
                setAlert({ open: true, message: "User already exists!", severity: "error" });
            } else {
                console.log(data);
                setAlert({ open: true, message: "Signup successful!", severity: "success" });
                setTimeout(() => router.push("/auth/login"), 1000);
            }
        } catch (error) {
            setAlert({ open: true, message: "Something went wrong!", severity: "error" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full h-full bg-[url('/auth-bg.png')] bg-cover bg-center bg-no-repeat px-4 flex justify-center items-center">
            <div className="w-full max-width h-fit mt-20 mb-20 flex flex-col md:flex-row justify-between items-center bg-[#a5a5a538] backdrop-blur-[56.5px] rounded-[20px] p-6 md:py-12 md:px-12 gap-24">
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image src='/Logo.png' height={250} width={250} className="object-contain w-1/2 md:w-[250px]" alt="Logo" />
                </div>
                <Image src='/line.png' width={0} height={0} className="hidden md:block h-[90%] w-fit absolute left-[50%] translate-x-[-50%]" alt="seperator" />
                <div className="w-full md:w-1/2 px-12 py-10 flex flex-col items-center gap-6 bg-white rounded-2xl">
                    <h1 className="text-2xl font-bold">Create New Account</h1>
                    <p className="text-gray-500">Welcome to Free Shops App Controller</p>
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col">
                            <label htmlFor="name" className="L1">Name</label>
                            <input id="name" type="text" className="L2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="email" className="L1">Email</label>
                            <input id="email" type="text" className="L2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="phone" className="L1">Phone</label>
                            <input id="phone" type="text" className="L2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" value={formData.phone} onChange={handleChange} />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="password" className="L1">Password</label>
                            <input id="password" type="password" className="L2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" value={formData.password} onChange={handleChange} />
                        </div>

                        <div className="w-full flex flex-col">
                            <label htmlFor="Cpassword" className="L1">Confirm Password</label>
                            <input id="Cpassword" type="password" className="L2 border border-[#7f7f7f] p-3 rounded-[10px] text-[#7F7F7F]" value={formData.Cpassword} onChange={handleChange} />
                        </div>

                    </div>
                    <button onClick={handleSubmit} disabled={loading} className="button-primary w-[214px]">
                        {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
                    </button>
                    <a href="/auth/login" className="text-blue-500">Already have an account?</a>
                </div>
            </div>
            {/* Snackbar for alerts */}
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
