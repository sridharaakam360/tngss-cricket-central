import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number; // expiry timestamp (in seconds)
  iat: number;
  id: string;
  email: string;
  role: string;
}

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/admin" replace />;
  }

  //   try {
  //     console.log(token)
  //     const decoded: JwtPayload = jwtDecode(token);

  //     console.log(decoded);

  //     // check expiry (exp is in seconds → convert to ms)
  //     if (decoded.exp * 1000 < Date.now()) {
  //       localStorage.removeItem("adminToken");
  //       localStorage.removeItem("adminUser");
  //       localStorage.removeItem("adminRole");
  //       return <Navigate to="/admin" replace />;
  //     }
  //   } catch (err) {
  //     // invalid or malformed token
  //     localStorage.removeItem("adminToken");
  //     return <Navigate to="/admin" replace />;
  //   }
  console.log("Token found:", token);
  try {
    const decoded: JwtPayload = jwtDecode(token);
    console.log("Decoded token:", decoded);

    if (decoded.exp * 1000 < Date.now()) {
      console.log("❌ Token expired");
      localStorage.clear();
      return <Navigate to="/admin" replace />;
    }
  } catch (err) {
    console.log("❌ Invalid token", err);
    localStorage.clear();
    return <Navigate to="/admin" replace />;
  }

  console.log("✅ ProtectedRoute allowing access");

  return <>{children}</>;
};

export default ProtectedRoute;
