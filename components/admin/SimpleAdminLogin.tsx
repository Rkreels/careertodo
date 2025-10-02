import React from 'react';

export const SimpleAdminLogin: React.FC = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '20px',
          color: '#1f2937',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>
          🔐 Admin Portal
        </h1>
        <p style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          color: '#6b7280'
        }}>
          Sign in to access the admin dashboard
        </p>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
            Admin Email
          </label>
          <input
            type="email"
            placeholder="admin@careertodo.com"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
            Admin Password
          </label>
          <input
            type="password"
            placeholder="Enter admin password"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #d1d5db',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
        </div>
        
        <button
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            marginBottom: '15px'
          }}
        >
          Sign In as Admin
        </button>
        
        <div style={{ textAlign: 'center' }}>
          <a
            href="/"
            style={{
              color: '#6b7280',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};