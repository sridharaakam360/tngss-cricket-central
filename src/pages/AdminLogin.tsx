// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SEO from "@/components/seo/SEO";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// interface LoginForm {
//   email: string;
//   password: string;
// }

// const AdminLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState<LoginForm>({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState<string>("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     // Mock authentication - in real app this would be an API call
//     if (formData.email === "admin@tngss.com" && formData.password === "admin123") {
//       // Store auth token or user info
//       localStorage.setItem("adminAuth", "true");
//       localStorage.setItem("adminRole", "super_admin");
//       navigate("/admin/dashboard");
//     } else if (formData.email === "scorer@tngss.com" && formData.password === "scorer123") {
//       localStorage.setItem("adminAuth", "true");
//       localStorage.setItem("adminRole", "match_scorer");
//       navigate("/admin/dashboard");
//     } else if (formData.email === "manager@tngss.com" && formData.password === "manager123") {
//       localStorage.setItem("adminAuth", "true");
//       localStorage.setItem("adminRole", "team_manager");
//       navigate("/admin/dashboard");
//     } else {
//       setError("Invalid email or password");
//     }

//     setIsLoading(false);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4">
//       <SEO title="Admin Login" description="Secure access for administrators and scorers." canonical="/admin" />
//       <Card className="w-full max-w-md">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
//           <p className="text-muted-foreground">Access the TNGSS Cricket League Admin Panel</p>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {error && (
//               <Alert variant="destructive">
//                 <AlertDescription>{error}</AlertDescription>
//               </Alert>
//             )}

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="admin@tngss.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <Button type="submit" className="w-full" disabled={isLoading}>
//               {isLoading ? "Signing in..." : "Sign in"}
//             </Button>
//           </form>

//           <div className="mt-6 p-4 bg-muted/50 rounded-lg">
//             <h4 className="font-semibold text-sm mb-2">Demo Credentials:</h4>
//             <div className="text-xs space-y-1 text-muted-foreground">
//               <div><strong>Super Admin:</strong> admin@tngss.com / admin123</div>
//               <div><strong>Match Scorer:</strong> scorer@tngss.com / scorer123</div>
//               <div><strong>Team Manager:</strong> manager@tngss.com / manager123</div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </main>
//   );
// };

// export default AdminLogin;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import SEO from "@/components/seo/SEO";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LoginForm {
  email: string;
  password: string;
}

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        // "http://10.139.69.41:4000/api/auth/login",
        "https://aakamshineapi.yugan.tech/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      const { token, user } = response.data;

      // Store token and user in localStorage
      localStorage.setItem("adminToken", token);
      localStorage.setItem("adminUser", JSON.stringify(user));

      // Optional: handle role-based redirection
      if (user?.role) {
        localStorage.setItem("adminRole", user.role);
      }

      // Navigate to dashboard
      // navigate("/admin/dashboard", { replace: true });
      console.log("Navigating to /admin/dashboard...");
      navigate("/admin/dashboard", { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(
        err?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-4">
      <SEO
        title="Admin Login"
        description="Secure access for administrators and scorers."
        canonical="/admin"
      />
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <p className="text-muted-foreground">
            Access the TNGSS Cricket League Admin Panel
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="admin@tngss.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default AdminLogin;
