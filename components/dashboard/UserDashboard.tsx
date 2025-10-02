import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { 
  Users, 
  TrendingUp, 
  Settings, 
  Smartphone, 
  CreditCard,
  Award,
  User,
  Copy,
  LogOut,
  Crown,
  MessageSquare
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [copiedReferral, setCopiedReferral] = useState(false);

  const handleCopyReferralCode = () => {
    const referralCode = user?.referral_code || 'CAREER2024';
    navigator.clipboard.writeText(referralCode);
    setCopiedReferral(true);
    setTimeout(() => setCopiedReferral(false), 2000);
  };

  const handleSignOut = async () => {
    // Add sign out logic here
    const { supabase } = await import('@/lib/supabase');
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  const handleLaunchTool = (toolName: string, departmentId: string) => {
    if (!user?.is_paid) {
      window.location.href = '/payment';
      return;
    }
    
    // Mock tool launching logic
    console.log(`Launching ${toolName} from ${departmentId}`);
    
    // Here you would typically:
    // 1. Track tool usage in analytics
    // 2. Open the tool in a modal or new page
    // 3. Update user progress
    
    // For now, let's show an alert
    alert(`Launching ${toolName}...\n\nThis would open the ${toolName} simulation in a real implementation.`);
  };

  const mockDepartments = [
    {
      id: 'hr',
      name: 'Human Resources',
      description: 'Master recruitment, employee management, and organizational development',
      icon: Users,
      color: 'bg-blue-500',
      tools: ['Interview Simulator', 'Performance Review', 'Team Builder', 'Policy Creator']
    },
    {
      id: 'sales',
      name: 'Sales & Marketing',
      description: 'Develop persuasive communication and strategic selling skills',
      icon: TrendingUp,
      color: 'bg-green-500',
      tools: ['Sales Call Simulator', 'Email Marketing', 'CRM Practice', 'Presentation Skills']
    },
    {
      id: 'finance',
      name: 'Accounting & Finance',
      description: 'Learn financial analysis, budgeting, and strategic planning',
      icon: Award,
      color: 'bg-yellow-500',
      tools: ['Financial Calculator', 'Budget Planner', 'Investment Analysis', 'Risk Assessment']
    },
    {
      id: 'operations',
      name: 'Operations',
      description: 'Optimize processes and improve operational efficiency',
      icon: Settings,
      color: 'bg-purple-500',
      tools: ['Process Mapper', 'Quality Control', 'Supply Chain', 'Project Management']
    },
    {
      id: 'customer_service',
      name: 'Customer Service',
      description: 'Build exceptional customer support and communication skills',
      icon: MessageSquare,
      color: 'bg-pink-500',
      tools: ['Call Center Simulator', 'Email Response', 'Conflict Resolution', 'Customer Retention']
    },
    {
      id: 'leadership',
      name: 'Leadership',
      description: 'Develop strategic thinking and team management capabilities',
      icon: Crown,
      color: 'bg-indigo-500',
      tools: ['Team Leadership', 'Strategic Planning', 'Decision Making', 'Change Management']
    }
  ];

  const mockReferrals = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      status: 'completed',
      joinedAt: '2024-01-15',
      reward: '৳500',
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'pending',
      joinedAt: '2024-01-20',
      reward: '৳0',
    },
  ];

  const mockDevices = [
    {
      id: '1',
      name: 'Chrome on Windows',
      lastActive: '2 hours ago',
      isActive: true,
    },
    {
      id: '2',
      name: 'Safari on iPhone',
      lastActive: '1 day ago',
      isActive: true,
    },
  ];

  return (
    <ProtectedRoute requirePayment={false}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome to SkillSim
                </h1>
                <p className="text-gray-600 mt-2">
                  Choose a department to start your simulation experience
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge variant={user?.is_paid ? 'default' : 'secondary'} className="px-3 py-1">
                  {user?.is_paid ? 'Premium' : 'Free'}
                </Badge>
                {!user?.is_paid && (
                  <Button onClick={() => window.location.href = '/payment'}>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Upgrade Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Tabs defaultValue="departments" className="space-y-8">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto">
              <TabsTrigger value="departments">Departments</TabsTrigger>
              <TabsTrigger value="profile">User Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="departments" className="space-y-8">
              {/* Department Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockDepartments.map((department) => {
                  const Icon = department.icon;
                  return (
                    <Card key={department.id} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-3 rounded-lg ${department.color} text-white`}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{department.name}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-sm mt-3">
                          {department.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="space-y-3">
                          <div>
                            <p className="text-sm font-medium text-gray-700 mb-2">Available Tools:</p>
                            <div className="space-y-2">
                              {department.tools.map((tool, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                  <span className="text-sm text-gray-700">{tool}</span>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    className="text-xs h-7 px-3"
                                    onClick={() => handleLaunchTool(tool, department.id)}
                                  >
                                    Visit
                                  </Button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="profile" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* User Info Card */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="mr-2 h-5 w-5" />
                      Profile Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                        {user?.name?.charAt(0) || 'U'}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{user?.name || 'User'}</h3>
                        <p className="text-sm text-gray-600">{user?.email || 'user@example.com'}</p>
                        <Badge variant={user?.is_paid ? 'default' : 'secondary'} className="mt-1">
                          {user?.is_paid ? 'Premium Member' : 'Free Member'}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Member Since</span>
                        <span className="text-sm font-medium">Jan 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Completed Tools</span>
                        <span className="text-sm font-medium">19</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Total Progress</span>
                        <span className="text-sm font-medium">47%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Profile Settings Tabs */}
                <Card className="lg:col-span-2">
                  <CardContent className="p-0">
                    <Tabs defaultValue="referrals" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 rounded-none border-b">
                        <TabsTrigger value="referrals">Referrals</TabsTrigger>
                        <TabsTrigger value="devices">Devices</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="referrals" className="p-6 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Referral Program</h3>
                          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border">
                            <h4 className="font-medium text-blue-900 mb-2">Your Referral Code</h4>
                            <div className="flex items-center space-x-2">
                              <code className="bg-white px-4 py-2 rounded border flex-1 text-center">
                                {user?.referral_code || 'CAREER2024'}
                              </code>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={handleCopyReferralCode}
                              >
                                {copiedReferral ? 'Copied!' : <Copy className="h-4 w-4" />}
                              </Button>
                            </div>
                            <p className="text-sm text-blue-700 mt-2">
                              Share this code with friends and earn ৳500 for each successful referral!
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium mb-3">Your Referrals</h4>
                          <div className="space-y-3">
                            {mockReferrals.map((referral) => (
                              <div key={referral.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <p className="font-medium">{referral.name}</p>
                                  <p className="text-sm text-gray-600">{referral.email}</p>
                                  <p className="text-xs text-gray-500">Joined {referral.joinedAt}</p>
                                </div>
                                <div className="text-right">
                                  <Badge variant={referral.status === 'completed' ? 'default' : 'secondary'}>
                                    {referral.status}
                                  </Badge>
                                  <p className="text-sm font-medium mt-1">{referral.reward}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </TabsContent>

                      <TabsContent value="devices" className="p-6 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Device Management</h3>
                          <div className="space-y-3">
                            {mockDevices.map((device) => (
                              <div key={device.id} className="flex items-center justify-between p-3 border rounded-lg">
                                <div className="flex items-center space-x-3">
                                  <Smartphone className="h-5 w-5 text-gray-500" />
                                  <div>
                                    <p className="font-medium">{device.name}</p>
                                    <p className="text-sm text-gray-600">Last active {device.lastActive}</p>
                                  </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Badge variant={device.isActive ? 'default' : 'secondary'}>
                                    {device.isActive ? 'Active' : 'Inactive'}
                                  </Badge>
                                  <Button size="sm" variant="outline">
                                    Revoke
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-4">
                            You can have up to 2 active devices. Revoke a device to add a new one.
                          </p>
                        </div>
                      </TabsContent>

                      <TabsContent value="settings" className="p-6 space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Email Notifications</p>
                                <p className="text-sm text-gray-600">Receive updates about your progress</p>
                              </div>
                              <Button size="sm" variant="outline">
                                Configure
                              </Button>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Privacy Settings</p>
                                <p className="text-sm text-gray-600">Control your data and privacy</p>
                              </div>
                              <Button size="sm" variant="outline">
                                Manage
                              </Button>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Subscription</p>
                                <p className="text-sm text-gray-600">
                                  {user?.is_paid ? 'Premium Active' : 'Free Plan'}
                                </p>
                              </div>
                              <Button 
                                size="sm" 
                                variant={user?.is_paid ? "outline" : "default"}
                                onClick={() => window.location.href = '/payment'}
                              >
                                {user?.is_paid ? 'Manage' : 'Upgrade'}
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t">
                          <Button 
                            variant="destructive" 
                            onClick={handleSignOut}
                            className="w-full"
                          >
                            <LogOut className="mr-2 h-4 w-4" />
                            Sign Out
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ProtectedRoute>
  );
};