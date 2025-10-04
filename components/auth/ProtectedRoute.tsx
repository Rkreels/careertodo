import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Shield, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requirePayment?: boolean;
  requireAdmin?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requirePayment = false,
  requireAdmin = false,
  redirectTo 
}) => {
  const { user, loading, isAdmin, userProfile } = useAuth();

  // DISABLED FOR NOW - Automatic redirects were causing issues
  /*
  useEffect(() => {
    if (loading) return;

    if (!user) {
      // User not logged in, redirect to home
      window.location.href = '/';
      return;
    }

    if (requireAdmin && !isAdmin) {
      // User is not admin, redirect to home with error
      window.location.href = '/?error=admin_required';
      return;
    }

    if (requirePayment && userProfile && !userProfile.is_paid) {
      // User hasn't paid, redirect to payment
      window.location.href = '/payment';
      return;
    }
  }, [user, loading, isAdmin, userProfile, requirePayment, requireAdmin]);
  */

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Shield className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold mb-2">Authentication Required</h2>
          <p className="text-gray-600 mb-6">
            Please sign in to access this page.
          </p>
          <Button onClick={() => window.location.href = '/'}>
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-6">
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Admin access required to view this page.
            </AlertDescription>
          </Alert>
          
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-6">
              You don't have permission to access this admin area.
            </p>
            <Button onClick={() => window.location.href = '/'}>
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (requirePayment && userProfile && !userProfile.is_paid) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-xl font-semibold mb-2">Payment Required</h2>
          <p className="text-gray-600 mb-6">
            Please complete your payment to access this feature.
          </p>
          <Button onClick={() => window.location.href = '/payment'}>
            Go to Payment
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};