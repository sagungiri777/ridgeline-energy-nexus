
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { LogOut, Save, Plus, Edit, Trash2 } from 'lucide-react';

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('content');

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    onLogout();
    toast.success('Successfully logged out');
  };

  const handleSave = () => {
    toast.success('Content updated successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Ridge Line Energy - Admin Panel</h1>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="careers">Careers</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle>Website Content Management</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Company Description</label>
                  <Textarea
                    placeholder="Edit company description..."
                    className="min-h-32"
                    defaultValue="Ridge Line Energy Ltd. (RLE) is a forward-looking renewable energy company established in 2074 B.S. (2017 A.D.), committed to developing Nepal's hydropower potential sustainably and responsibly..."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Mission Statement</label>
                  <Textarea
                    placeholder="Edit mission statement..."
                    defaultValue="To build efficient hydropower plants, support sustainability, empower communities, and uphold transparency."
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Vision Statement</label>
                  <Textarea
                    placeholder="Edit vision statement..."
                    defaultValue="To be a trusted leader in Nepal's renewable energy sector."
                  />
                </div>
                <Button onClick={handleSave} className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Project Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Project
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {['Super Chepe Hydropower Project', 'Doodhpokhari Chepe Hydropower', 'Upper Maiwa Khola Hydropower'].map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{project}</h3>
                        <p className="text-sm text-gray-600">Status: Active</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>News & Announcements</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add News
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-4">
                    <Input placeholder="News Title" />
                    <Textarea placeholder="News Content" className="min-h-32" />
                    <div className="flex gap-2">
                      <Input type="date" />
                      <Button>Publish</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="gallery">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Gallery Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Upload Images
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="relative group">
                      <div className="aspect-square bg-gray-200 rounded-lg"></div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="careers">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Career Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Job
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input placeholder="Job Title" />
                  <Input placeholder="Department" />
                  <Textarea placeholder="Job Description" className="min-h-32" />
                  <div className="flex gap-2">
                    <Input placeholder="Location" />
                    <Input placeholder="Experience Required" />
                  </div>
                  <Button onClick={handleSave}>Save Job Posting</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
