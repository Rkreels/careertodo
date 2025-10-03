import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useAuth } from '@/contexts/AuthContext';
import { useLocation } from 'wouter';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'login',
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(defaultMode);
  const { user, userProfile } = useAuth();
  const [, setLocation] = useLocation();

  // Update mode when defaultMode changes (when opening modal with different mode)
  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
    }
  }, [defaultMode, isOpen]);

  // Handle successful authentication and redirect
  useEffect(() => {
    if (user && userProfile) {
      // User is authenticated, close modal and redirect
      setTimeout(() => {
        onClose();
        
        // Check if user needs to pay
        if (!userProfile.is_paid) {
          setLocation('/payment');
        } else {
          setLocation('/dashboard');
        }
      }, 1000);
    }
  }, [user, userProfile, onClose, setLocation]);

  const handleToggleMode = () => {
    console.log('Toggling mode from', mode, 'to', mode === 'login' ? 'register' : 'login');
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    console.log('Closing modal, resetting mode to', defaultMode);
    setMode(defaultMode);
    onClose();
  };

  const handleAuthSuccess = () => {
    // Authentication successful - the useEffect will handle the redirect
    console.log('Authentication successful, waiting for user data...');
  };

  console.log('AuthModal render - mode:', mode, 'defaultMode:', defaultMode);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {mode === 'login' ? 'Sign in to your CareerToDo account' : 'Create a new CareerToDo account'}
        </DialogDescription>
        <div className="p-4 sm:p-6">
          {mode === 'login' ? (
            <LoginForm onToggleMode={handleToggleMode} onSuccess={handleAuthSuccess} />
          ) : (
            <RegisterForm onToggleMode={handleToggleMode} onSuccess={handleAuthSuccess} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};