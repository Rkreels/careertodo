import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { BkashPayment } from './BkashPayment';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Crown, Lock, CheckCircle } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  const { user } = useAuth();
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaymentSuccess = () => {
    // Payment successful - user will be redirected to dashboard
    window.location.href = '/dashboard';
  };

  const handlePaymentFailure = () => {
    // Payment failed - show message
    setIsProcessing(false);
  };

  const handlePayNow = () => {
    setShowPayment(true);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <p>Please log in to access this page.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
            <Crown className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Unlock Your Career Potential
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete your payment to access all CareerToDo features and start your journey to professional success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Current Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Your Account Status
              </CardTitle>
              <CardDescription>
                You're registered but payment is required to access premium features
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Registration</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Complete
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Payment Status</span>
                <Badge variant="destructive">
                  Pending
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Account Access</span>
                <Badge variant="outline">
                  Limited
                </Badge>
              </div>
              
              <Alert>
                <AlertDescription className="text-sm">
                  Complete your payment to unlock full access to all simulations, career paths, and premium features.
                </AlertDescription>
              </Alert>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium mb-2">Account Information:</p>
                <p className="text-sm text-gray-600">{user.name}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
                <p className="text-sm text-gray-600">{user.phone}</p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
              <CardDescription>
                Select your payment method to activate your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Plan Details */}
              <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">Premium Access</h3>
                  <Badge className="bg-blue-600">Recommended</Badge>
                </div>
                <div className="text-2xl font-bold mb-2">৳1,500<span className="text-sm font-normal text-gray-600">/one-time</span></div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Lifetime access to all simulations</li>
                  <li>✓ 20+ real-world business tools</li>
                  <li>✓ Career path guidance</li>
                  <li>✓ Certificate of completion</li>
                  <li>✓ Priority support</li>
                </ul>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <h4 className="font-medium">Payment Method</h4>
                
                {/* bKash Option */}
                <div className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">bK</span>
                      </div>
                      <div>
                        <p className="font-medium">bKash</p>
                        <p className="text-xs text-gray-600">Fast & secure mobile payment</p>
                      </div>
                    </div>
                    <Button 
                      onClick={handlePayNow}
                      className="bg-pink-500 hover:bg-pink-600"
                      disabled={isProcessing}
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        'Pay Now'
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <Alert>
                <AlertDescription className="text-xs">
                  🔒 Your payment information is secure. We use industry-standard encryption to protect your data.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">20+</span>
              </div>
              <h3 className="font-semibold mb-2">Business Tools</h3>
              <p className="text-sm text-gray-600">Master ERP, CRM, HRMS, and more</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">∞</span>
              </div>
              <h3 className="font-semibold mb-2">Lifetime Access</h3>
              <p className="text-sm text-gray-600">One-time payment, forever access</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Job Ready</h3>
              <p className="text-sm text-gray-600">Get prepared for your dream career</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* bKash Payment Modal */}
      <BkashPayment
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
        onFailure={handlePaymentFailure}
        amount={1500}
        userInfo={{
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || ''
        }}
      />
    </div>
  );
};