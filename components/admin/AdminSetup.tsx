import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { adminHelpers } from '@/lib/supabase';

const DEFAULT_ADMIN = {
  email: 'admin@careertodo.com',
  password: 'Admin123!@#',
  name: 'System Administrator',
  phone: '01700000000'
};

export const AdminSetup: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [result, setResult] = useState<{
    type: 'success' | 'error' | 'info' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleCreateAdmin = async () => {
    setIsCreating(true);
    setResult({ type: null, message: '' });

    try {
      const { user, error } = await adminHelpers.createAdminUser(
        DEFAULT_ADMIN.email,
        DEFAULT_ADMIN.password,
        DEFAULT_ADMIN.name,
        DEFAULT_ADMIN.phone
      );

      if (error) {
        if (error.message.includes('duplicate key') || error.message.includes('already registered')) {
          setResult({
            type: 'info',
            message: 'Admin user already exists. You can login with the default credentials.'
          });
        } else {
          setResult({
            type: 'error',
            message: `Error creating admin: ${error.message}`
          });
        }
      } else {
        setResult({
          type: 'success',
          message: 'Admin user created successfully!'
        });
      }
    } catch (error: any) {
      setResult({
        type: 'error',
        message: `Unexpected error: ${error.message}`
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <Badge variant="secondary" className="text-sm font-semibold">
              ADMIN SETUP
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold">
            Admin User Setup
          </CardTitle>
          <CardDescription>
            Create the default administrator account for CareerToDo platform
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Default Credentials Display */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-3">Default Admin Credentials</h3>
            <div className="space-y-2 font-mono text-sm">
              <div><span className="font-medium">Email:</span> {DEFAULT_ADMIN.email}</div>
              <div><span className="font-medium">Password:</span> {DEFAULT_ADMIN.password}</div>
              <div><span className="font-medium">Name:</span> {DEFAULT_ADMIN.name}</div>
              <div><span className="font-medium">Phone:</span> {DEFAULT_ADMIN.phone}</div>
            </div>
          </div>

          {/* Result Messages */}
          {result.type && (
            <Alert variant={result.type === 'error' ? 'destructive' : 'default'}>
              {result.type === 'success' && <CheckCircle className="h-4 w-4" />}
              {result.type === 'error' && <AlertTriangle className="h-4 w-4" />}
              {result.type === 'info' && <Shield className="h-4 w-4" />}
              <AlertDescription>{result.message}</AlertDescription>
            </Alert>
          )}

          {/* Instructions */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium text-gray-900 mb-2">How to Login as Admin</h3>
            <ol className="text-sm text-gray-700 space-y-1 list-decimal list-inside">
              <li>Click the button below to create the admin user</li>
              <li>Navigate to the main application</li>
              <li>Open the login modal</li>
              <li>Click the "Admin" button</li>
              <li>Enter the admin credentials</li>
              <li>You will be redirected to the admin dashboard</li>
            </ol>
          </div>

          {/* Security Warning */}
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Security Notice:</strong> This is for development/testing only. 
              In production, change the default password and use environment variables for credentials.
            </AlertDescription>
          </Alert>

          {/* Action Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleCreateAdmin}
              disabled={isCreating}
              size="lg"
              className="w-full sm:w-auto"
            >
              {isCreating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating Admin User...
                </>
              ) : (
                <>
                  <Shield className="mr-2 h-4 w-4" />
                  Create Admin User
                </>
              )}
            </Button>
          </div>

          {/* Success State - Login Instructions */}
          {result.type === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-medium text-green-900 mb-2">✅ Admin User Ready!</h3>
              <p className="text-sm text-green-800 mb-3">
                You can now login as admin using the credentials above.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                size="sm"
              >
                Go to Login Page
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};