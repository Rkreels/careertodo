import { Switch, Route } from "wouter";
import HomePage from "@/pages/HomePage";
import DemoPage from "@/pages/DemoPage";
import { UserDashboard } from "@/components/dashboard/UserDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { PaymentPage } from "@/components/payment/PaymentPage";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/demo" component={DemoPage} />
      <Route path="/admin-login" component={AdminLogin} />
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
