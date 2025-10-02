import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

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

  // Update mode when defaultMode changes (when opening modal with different mode)
  useEffect(() => {
    if (isOpen) {
      setMode(defaultMode);
    }
  }, [defaultMode, isOpen]);

  const handleToggleMode = () => {
    console.log('Toggling mode from', mode, 'to', mode === 'login' ? 'register' : 'login');
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    console.log('Closing modal, resetting mode to', defaultMode);
    setMode(defaultMode);
    onClose();
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
            <LoginForm onToggleMode={handleToggleMode} />
          ) : (
            <RegisterForm onToggleMode={handleToggleMode} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};