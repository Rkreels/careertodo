import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Smartphone, CheckCircle, XCircle } from 'lucide-react';

interface BkashPaymentProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onFailure: () => void;
  amount: number;
  userInfo: {
    name: string;
    email: string;
    phone: string;
  };
}

export const BkashPayment: React.FC<BkashPaymentProps> = ({
  isOpen,
  onClose,
  onSuccess,
  onFailure,
  amount,
  userInfo,
}) => {
  const [paymentStep, setPaymentStep] = useState<'init' | 'processing' | 'success' | 'failed'>('init');
  const [isProcessing, setIsProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);

  const handlePayment = async () => {
    setIsProcessing(true);
    setPaymentStep('processing');

    try {
      // Simulate bKash payment process
      // In production, this would integrate with actual bKash API
      await simulateBkashPayment();
      
      setPaymentStep('success');
      setTransactionId('BK' + Date.now());
      
      // Call success callback after 2 seconds
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 2000);
      
    } catch (error) {
      setPaymentStep('failed');
      setTimeout(() => {
        onFailure();
      }, 2000);
    } finally {
      setIsProcessing(false);
    }
  };

  const simulateBkashPayment = async (): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Simulate 90% success rate for demo
    if (Math.random() > 0.1) {
      return Promise.resolve();
    } else {
      throw new Error('Payment failed');
    }
  };

  const handleClose = () => {
    if (paymentStep === 'processing') return; // Don't allow closing during processing
    onClose();
    // Reset state when closing
    setTimeout(() => {
      setPaymentStep('init');
      setTransactionId(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0">
        <DialogTitle className="sr-only">
          bKash Payment
        </DialogTitle>
        <DialogDescription className="sr-only">
          Complete your payment using bKash
        </DialogDescription>
        
        <Card className="border-0 shadow-none">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl">bKash Payment</CardTitle>
            <CardDescription>
              Pay ৳{amount} to complete your registration
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* User Info */}
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-medium">{userInfo.name}</p>
              <p className="text-xs text-gray-600">{userInfo.email}</p>
              <p className="text-xs text-gray-600">{userInfo.phone}</p>
            </div>

            {/* Payment Status */}
            {paymentStep === 'init' && (
              <div className="text-center space-y-4">
                <Alert>
                  <AlertDescription className="text-sm">
                    Click "Pay with bKash" to complete your payment. You will be redirected to bKash to complete the transaction.
                  </AlertDescription>
                </Alert>
                
                <div className="space-y-2">
                  <p className="text-xs text-gray-600">Payment Details:</p>
                  <div className="bg-white border rounded p-3">
                    <div className="flex justify-between text-sm">
                      <span>Amount:</span>
                      <span className="font-medium">৳{amount}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Method:</span>
                      <span className="font-medium">bKash</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                    disabled={isProcessing}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handlePayment}
                    className="flex-1 bg-pink-500 hover:bg-pink-600"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      'Pay with bKash'
                    )}
                  </Button>
                </div>
              </div>
            )}

            {paymentStep === 'processing' && (
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
                <p className="text-sm font-medium">Processing Payment...</p>
                <p className="text-xs text-gray-600">Please wait while we process your bKash payment</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
              </div>
            )}

            {paymentStep === 'success' && (
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-sm font-medium text-green-600">Payment Successful!</p>
                {transactionId && (
                  <p className="text-xs text-gray-600">Transaction ID: {transactionId}</p>
                )}
                <p className="text-xs text-gray-600">Redirecting to dashboard...</p>
              </div>
            )}

            {paymentStep === 'failed' && (
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <p className="text-sm font-medium text-red-600">Payment Failed</p>
                <p className="text-xs text-gray-600">Unable to process your payment. Please try again.</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={handleClose}
                    className="flex-1"
                  >
                    Close
                  </Button>
                  <Button
                    onClick={() => setPaymentStep('init')}
                    className="flex-1"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};