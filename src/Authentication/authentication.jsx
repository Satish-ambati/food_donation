import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const roles = [
    { label: "🧑‍🍳 Donor", value: "Donor" },
    { label: "🏥 NGO", value: "NGO" },
    { label: "🏢 Organization", value: "Organization" },
  ];
  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleRoleSelect = (role) => {
    setFormData((prev) => ({
      ...prev,
      role,
    }));
    setShowRoleOptions(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && (!formData.role || !formData.name)) {
      alert("Please fill out all fields including your name and role.");
      return;
    }
    console.log(isLogin ? "Logging in..." : "Signing up...", formData);
  };
  const handleGoogleSignIn = () => {
    console.log("Google Sign In clicked");
    // Link to Firebase or OAuth later
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 rounded-l-lg font-medium transition ${
              isLogin
                ? "text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            style={isLogin ? { backgroundColor: "#006400" } : {}}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 rounded-r-lg font-medium transition ${
              !isLogin
                ? "text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            style={!isLogin ? { backgroundColor: "#006400" } : {}}
          >
            Sign Up
          </button>
        </div>

        <h2 className="text-center text-2xl font-bold mb-4 text-[#006400]">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-[#006400]"
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-[#006400]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-[#006400]"
          />

          {/* Role Select */}
          {!isLogin && (
            <div>
              <div
                onClick={() => setShowRoleOptions((prev) => !prev)}
                className={`p-3 border rounded cursor-pointer flex justify-between items-center ${
                  formData.role ? "bg-green-100 border-[#006400]" : "bg-white"
                }`}
              >
                {formData.role || "Choose your type (Donor, NGO...)"}
                <span className="text-sm text-gray-500">
                  {showRoleOptions ? "▲" : "▼"}
                </span>
              </div>

              {showRoleOptions && (
                <div className="mt-2 space-y-1 transition-all">
                  {roles.map((role) => (
                    <div
                      key={role.value}
                      onClick={() => handleRoleSelect(role.value)}
                      className={`px-4 py-2 border rounded cursor-pointer hover:bg-green-100 ${
                        formData.role === role.value ? "bg-green-100 border-[#006400]" : "bg-white"
                      }`}
                    >
                      {role.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {isLogin && (
            <div className="text-right text-sm text-[#006400] hover:underline cursor-pointer" onClick={()=>navigate("/forget")}>
              Forgot Password?
            </div>
          )}

          <button
            type="submit"
            className="w-full text-white font-medium py-2 rounded mt-2 transition"
            style={{ backgroundColor: "#006400" }}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 mt-3 py-2 rounded hover:bg-gray-100 transition"
          >
            <FcGoogle className="text-xl" />
            <span>{isLogin ? "Login with Google" : "Sign up with Google"}</span>
          </button>
        </form>
      </div>
    </div>
  );
}