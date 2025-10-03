import { Switch, Route } from "wouter";
import HomePage from "@/pages/HomePage";
import SignupPage from "@/pages/SignupPage";
import LoginPage from "@/pages/LoginPage";
import { UserDashboard } from "@/components/dashboard/UserDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { PaymentPage } from "@/components/payment/PaymentPage";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AdminLoginForm } from "@/components/auth/AdminLoginForm";
import NotFound from "@/pages/not-found";

// Admin Login Page Component
const AdminLoginPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '20px'
    }}>
      <AdminLoginForm />
    </div>
  );
};

function Router() {
  console.log('Router component rendering, current path:', window.location.pathname);
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin-login" component={AdminLoginPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/dashboard">
        <ProtectedRoute requirePayment={true}>
          <UserDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/admin">
        <ProtectedRoute requireAdmin={true}>
          <AdminDashboard />
        </ProtectedRoute>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return <Router />;
}

export default App;
