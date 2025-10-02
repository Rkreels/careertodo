// Database types for Supabase
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  is_paid: boolean;
  payment_status: string;
  role: string;
  referral_code?: string;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  amount: number;
  payment_method: string;
  status: string;
  bKash_transaction_id?: string;
  verified_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Device {
  id: string;
  user_id: string;
  device_id: string;
  device_info?: string;
  is_active: boolean;
  last_active: string;
  created_at: string;
  updated_at: string;
}

export interface UserSession {
  id: string;
  user_id: string;
  token: string;
  expires_at: string;
  created_at: string;
}

// Form types
export interface SignUpForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  referralCode?: string;
}

export interface SignInForm {
  email: string;
  password: string;
}

export interface PaymentForm {
  amount: number;
  paymentMethod: string;
}