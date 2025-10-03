import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Eye, EyeOff, CheckCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { BkashPayment } from '@/components/payment/BkashPayment';

interface RegisterFormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
}

interface RegisterFormProps {
  onToggleMode: () => void;
  onSuccess?: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onToggleMode, onSuccess }) => {
  const { signUp, signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [registeredUser, setRegisteredUser] = useState<RegisterFormData | null>(null);
  const [registrationStep, setRegistrationStep] = useState<'form' | 'payment' | 'success'>('form');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<RegisterFormData>();

  const password = watch('password');

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setError(null);
      setIsSuccess(false);
      if (data.password !== data.confirmPassword) {
        setError("Passwords don't match");
        return;
      }
      const { confirmPassword, ...registerData } = data;
      
      // First, register the user
      const { error, data: signUpData } = await signUp(registerData.email, registerData.password, {
        name: registerData.name,
        phone: registerData.phone,
        referral_code: registerData.referralCode,
      });
      
      if (error) {
        // Check if it's just an email confirmation error (which we want to ignore)
        if (error.message?.includes('confirmation') || error.message?.includes('email')) {
          // Try to sign in immediately since we disabled email confirmation
          const { error: signInError } = await signIn(registerData.email, registerData.password);
          if (signInError) {
            setError(signInError.message || 'Registration successful but login failed');
          } else {
            // Successful registration and login
            setIsSuccess(true);
            setRegisteredUser(registerData);
            setRegistrationStep('payment');
            setShowPayment(true);
            // Call success callback
            setTimeout(() => {
              if (onSuccess) {
                onSuccess();
              }
            }, 1000);
          }
        } else {
          setError(error.message || 'Registration failed');
        }
      } else {
        // Registration successful, try to sign in immediately
        if (signUpData?.user) {
          const { error: signInError } = await signIn(registerData.email, registerData.password);
          if (signInError) {
            setError('Registration successful but automatic login failed. Please try logging in manually.');
          } else {
            // Successful registration and login
            setIsSuccess(true);
            setRegisteredUser(registerData);
            setRegistrationStep('payment');
            setShowPayment(true);
            // Call success callback
            setTimeout(() => {
              if (onSuccess) {
                onSuccess();
              }
            }, 1000);
          }
        }
      }
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    }
  };

  const handlePaymentSuccess = () => {
    setRegistrationStep('success');
    // Close modal after successful payment
    setTimeout(() => {
      onToggleMode(); // This will close the modal
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 2000);
  };

  const handlePaymentFailure = () => {
    // Payment failed but user is registered
    setShowPayment(false);
    setError('Registration successful! You can login and complete payment later to access premium features.');
    setTimeout(() => {
      onToggleMode(); // Close modal and let user login normally
    }, 3000);
  };

  const handleSkipPayment = () => {
    setShowPayment(false);
    setError('Registration successful! You can login and complete payment later to access premium features.');
    setTimeout(() => {
      onToggleMode(); // Close modal and let user login normally
    }, 3000);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="space-y-1 px-4 sm:px-6">
        <CardTitle className="text-xl sm:text-2xl font-bold text-center">Create Account</CardTitle>
        <CardDescription className="text-center text-sm sm:text-base">
          Join CareerToDo and start your journey
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
          {error && (
            <Alert variant="destructive" className="animate-in slide-in-from-top-2 duration-200">
              <AlertDescription className="text-sm">{error}</AlertDescription>
            </Alert>
          )}
          
          {isSuccess && (
            <Alert className="bg-green-50 border-green-200 text-green-800 animate-in slide-in-from-top-2 duration-200">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription className="text-sm">
                Registration successful! Redirecting to payment...
              </AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register('name', { required: 'Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } })}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-xs sm:text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-xs sm:text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="01XXXXXXXXX"
              {...register('phone', { required: 'Phone is required', minLength: { value: 11, message: 'Phone number must be at least 11 digits' } })}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-xs sm:text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Create a password"
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className={errors.password ? 'border-red-500' : 'pr-8 sm:pr-10'}
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

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                {...register('confirmPassword', { 
            required: 'Please confirm your password',
            validate: value => value === password || "Passwords don't match"
          })}
                className={errors.confirmPassword ? 'border-red-500' : 'pr-8 sm:pr-10'}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-2 sm:px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs sm:text-sm text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="referralCode" className="text-sm font-medium">Referral Code (Optional)</Label>
            <Input
              id="referralCode"
              type="text"
              placeholder="Enter referral code"
              {...register('referralCode')}
              className="text-sm"
            />
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6">
          <Button
            type="submit"
            className="w-full text-sm sm:text-base"
            loading={isSubmitting}
            disabled={isSubmitting || isSuccess}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Success!
              </>
            ) : (
              'Next →'
            )}
          </Button>
          
          <div className="text-center text-xs sm:text-sm">
            Already have an account?{' '}
            <Button
              type="button"
              variant="ghost"
              className="p-0 h-auto font-normal text-xs sm:text-sm hover:bg-transparent hover:text-primary"
              onClick={onToggleMode}
            >
              Sign in
            </Button>
          </div>
        </CardFooter>
      </form>
      
      {/* bKash Payment Modal */}
      {registeredUser && (
        <BkashPayment
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
          onFailure={handlePaymentFailure}
          amount={1500}
          userInfo={{
            name: registeredUser.name,
            email: registeredUser.email,
            phone: registeredUser.phone
          }}
        />
      )}
    </Card>
  );
};