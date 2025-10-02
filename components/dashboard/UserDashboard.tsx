import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Settings, 
  Smartphone, 
  CreditCard,
  Award,
  Target
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  const mockProgress = [
    {
      id: '1',
      careerPath: 'Sales Professional',
      progress: 65,
      completedSteps: 13,
      totalSteps: 20,
      lastActivity: '2 hours ago',
    },
    {
      id: '2',
      careerPath: 'Digital Marketing',
      progress: 30,
      completedSteps: 6,
      totalSteps: 20,
      lastActivity: '1 day ago',
    },
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
      <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600 mt-1">
                Continue your journey to career success
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-2">
              <Badge variant={user?.is_paid ? 'default' : 'secondary'}>
                {user?.is_paid ? 'Premium' : 'Free'}
              </Badge>
              {!user?.is_paid && (
                <Button size="sm" onClick={() => window.location.href = '/payment'}>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Upgrade Now
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47%</div>
              <p className="text-xs text-muted-foreground">
                +12% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Tools</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">19</div>
              <p className="text-xs text-muted-foreground">
                3 this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Referrals</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                ৳2,500 earned
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Devices</CardTitle>
              <Smartphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">
                Max 2 devices
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  Your Career Progress
                </CardTitle>
                <CardDescription>
                  Track your progress across different career paths
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockProgress.map((progress) => (
                  <div key={progress.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{progress.careerPath}</h3>
                        <p className="text-sm text-gray-600">
                          {progress.completedSteps} of {progress.totalSteps} steps completed
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{progress.progress}%</div>
                        <p className="text-xs text-gray-500">{progress.lastActivity}</p>
                      </div>
                    </div>
                    <Progress value={progress.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Available Tools
                </CardTitle>
                <CardDescription>
                  Access professional tools and simulations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Sales Call Simulator', status: 'available' },
                    { name: 'Email Marketing Tool', status: 'locked' },
                    { name: 'CRM Practice', status: 'available' },
                    { name: 'Social Media Planner', status: 'locked' },
                    { name: 'Financial Calculator', status: 'available' },
                    { name: 'Project Management', status: 'locked' },
                  ].map((tool, index) => (
                    <Card key={index} className="p-4">
                      <h3 className="font-medium">{tool.name}</h3>
                      <div className="mt-2">
                        {tool.status === 'available' ? (
                          <Button size="sm" className="w-full">
                            Launch Tool
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled className="w-full" onClick={() => window.location.href = '/payment'}>
                            <CreditCard className="mr-2 h-4 w-4" />
                            Upgrade to Unlock
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="referrals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Referral Program
                </CardTitle>
                <CardDescription>
                  Earn rewards by referring friends to CareerToDo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-medium text-blue-900">Your Referral Code</h3>
                  <div className="flex items-center mt-2 space-x-2">
                    <code className="bg-white px-3 py-1 rounded border">
                      {user?.referral_code || 'CAREER2024'}
                    </code>
                    <Button size="sm" variant="outline">
                      Copy
                    </Button>
                  </div>
                  <p className="text-sm text-blue-700 mt-2">
                    Share this code with friends and earn ৳500 for each successful referral!
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Your Referrals</h3>
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
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="mr-2 h-5 w-5" />
                  Account Settings
                </CardTitle>
                <CardDescription>
                  Manage your account and device settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-4">Device Management</h3>
                  <div className="space-y-3">
                    {mockDevices.map((device) => (
                      <div key={device.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{device.name}</p>
                          <p className="text-sm text-gray-600">Last active {device.lastActive}</p>
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
                  <p className="text-sm text-gray-500 mt-2">
                    You can have up to 2 active devices. Revoke a device to add a new one.
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <Button variant="destructive" size="sm">
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </ProtectedRoute>
  );
};