import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Eye, EyeOff, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface AdminLoginFormData {
  email: string;
  password: string;
}

export const AdminLogin: React.FC = () => {
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdminLoginFormData>();

  const onSubmit = async (data: AdminLoginFormData) => {
    try {
      setError(null);
      const { error } = await signIn(data.email, data.password);
      if (error) {
        setError(error.message || 'Admin login failed');
      }
    } catch (err: any) {
      setError(err.message || 'Admin login failed');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-2 border-primary/20">
        <CardHeader className="space-y-3 px-4 sm:px-6">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
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
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Admin Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
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
            
            <div className="text-center">
              <Button
                type="button"
                variant="ghost"
                className="p-0 h-auto font-normal text-xs text-gray-500 hover:text-primary"
                onClick={() => window.location.href = '/'}
              >
                ← Back to Home
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};