import React, { useState } from 'react';
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

  const handleToggleMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  const handleClose = () => {
    setMode(defaultMode);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0">
        <DialogTitle className="sr-only">
          {mode === 'login' ? 'Sign In' : 'Create Account'}
        </DialogTitle>
        <DialogDescription className="sr-only">
          {mode === 'login' ? 'Sign in to your CareerToDo account' : 'Create a new CareerToDo account'}
        </DialogDescription>
        <div className="p-6">
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