import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forget.css";
function Forget() {
    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);
    const [OTP, setOTP] = useState(true);
    const navigate = useNavigate();
    const [uemail, setEmail] = useState("");
    const [uotp, setUOTP] = useState("");
    const [upassword, setPassword] = useState("");
    const [ucpassword, setcPassword] = useState("");
    const AccessPassword = async () => {
                setOpen(true);
                setClose(false);
            alert("otp validated.....")
    };

    const Toasting = async () => {
        if (upassword === ucpassword) {
            const cred = { email: uemail, password: upassword };
            setOpen(false);
                    setClose(true);
                    alert("updated....")
                    navigate("/authentication");
        } else {
            toast.warning("Enter valid passwords in both fields....");
        }
    };

    const AccessOTP = async () => {
        const cred = { email: uemail };
        setOTP(false);
                setClose(true);
                alert("otp sented....")
    };

    return (
        <div className="container">
            <div className="forget-box">
                <h1>Forget Password</h1>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                {OTP && (
                    <button className="btn-green" onClick={AccessOTP}>
                        Send OTP
                    </button>
                )}
                {close && (
                    <>
                        <input
                            type="text"
                            inputMode="numeric"
                            maxLength="6"
                            placeholder="Enter OTP"
                            onChange={(e) => setUOTP(e.target.value)}
                        />
                        <button className="btn-green" onClick={AccessPassword}>
                            Verify
                        </button>
                    </>
                )}
                {open && (
                    <>
                        <input
                            type="password"
                            placeholder="Enter new Password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm new Password"
                            required
                            onChange={(e) => setcPassword(e.target.value)}
                        />
                        <button className="btn-green" onClick={Toasting}>
                            Submit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Forget;
