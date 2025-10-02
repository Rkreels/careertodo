import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, Eye, EyeOff, Shield, User, Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AdminLoginFormData {
  email: string;
  password: string;
}

interface AdminLoginFormProps {
  onBackToUserLogin?: () => void;
}

export const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ onBackToUserLogin }) => {
  const { signIn, isAdmin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginFormData>();

  // Redirect to admin dashboard if user is already admin
  React.useEffect(() => {
    if (isAdmin) {
      window.location.href = '/admin';
    }
  }, [isAdmin]);

  const onSubmit = async (data: AdminLoginFormData) => {
    try {
      setError(null);
      const { error } = await signIn(data.email, data.password);
      if (error) {
        setError(error.message || 'Admin login failed');
      } else {
        // Login successful, redirect will happen via useEffect
        console.log('Admin login successful, redirecting...');
      }
    } catch (err: any) {
      setError(err.message || 'Admin login failed');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2 border-primary/20">
      <CardHeader className="space-y-3 px-4 sm:px-6">
        <div className="flex items-center justify-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <Badge variant="secondary" className="text-xs font-semibold">
            ADMIN ACCESS
          </Badge>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">
          Admin Portal
        </CardTitle>
        <CardDescription className="text-center text-sm sm:text-base">
          Sign in to access the admin dashboard
        </CardDescription>
      </CardHeader>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4 px-4 sm:px-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription className="text-sm">{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <Settings className="h-4 w-4 text-blue-600 mt-0.5" />
              <div className="text-xs text-blue-800">
                <p className="font-medium mb-1">Admin Access Required</p>
                <p>You need admin privileges to access this portal.</p>
                <div className="mt-2 p-2 bg-blue-100 rounded border border-blue-300">
                  <p className="font-semibold text-blue-900">Default Credentials:</p>
                  <p className="text-blue-800">Email: admin@careertodo.com</p>
                  <p className="text-blue-800">Password: Admin123!@#</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium flex items-center">
              <User className="h-3 w-3 mr-1" />
              Admin Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@careertodo.com"
              defaultValue="admin@careertodo.com"
              {...register('email', { 
                required: 'Admin email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-xs sm:text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Admin Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter admin password"
                {...register('password', { 
                  required: 'Admin password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must be at least 6 characters'
                  }
                })}
                className={errors.password ? 'border-red-500 pr-8 sm:pr-10' : 'pr-8 sm:pr-10'}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-2 sm:px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
            {errors.password && (
              <p className="text-xs sm:text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6">
          <Button
            type="submit"
            className="w-full text-sm sm:text-base bg-primary hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Authenticating...
              </>
            ) : (
              <>
                <Shield className="mr-2 h-4 w-4" />
                Sign In as Admin
              </>
            )}
          </Button>
          
          {onBackToUserLogin && (
            <div className="text-center text-xs sm:text-sm">
              <Button
                type="button"
                variant="ghost"
                className="p-0 h-auto font-normal text-xs sm:text-sm hover:bg-transparent hover:text-primary"
                onClick={onBackToUserLogin}
              >
                ← Back to User Login
              </Button>
            </div>
          )}
          
          <div className="text-center text-xs sm:text-sm">
            <Button
              type="button"
              variant="ghost"
              className="p-0 h-auto font-normal text-xs sm:text-sm hover:bg-transparent hover:text-primary"
              onClick={() => window.location.href = '/'}
            >
              ← Back to Home
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
};