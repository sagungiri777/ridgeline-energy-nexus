
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { LogOut, Save, Upload } from 'lucide-react';

interface ContentSection {
  id: number;
  section: string;
  title: string;
  description: string;
  image_url: string;
}

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [content, setContent] = useState<ContentSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Your PHP backend URLs - update these to match your server
  const API_BASE_URL = 'https://yourdomain.com/api'; // Update this URL

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/getContent.php`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setContent(data.content || []);
      } else {
        toast.error('Failed to fetch content');
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      toast.error('Error fetching content');
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (sectionData: Partial<ContentSection>) => {
    setSaving(true);
    try {
      const response = await fetch(`${API_BASE_URL}/updateContent.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        },
        body: JSON.stringify(sectionData)
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        toast.success('Content updated successfully');
        fetchContent(); // Refresh content
      } else {
        toast.error(result.message || 'Failed to update content');
      }
    } catch (error) {
      console.error('Error updating content:', error);
      toast.error('Error updating content');
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    onLogout();
    toast.success('Logged out successfully');
  };

  const ContentForm: React.FC<{ section: ContentSection }> = ({ section }) => {
    const [formData, setFormData] = useState({
      id: section.id,
      section: section.section,
      title: section.title,
      description: section.description,
      image_url: section.image_url
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      updateContent(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Section</label>
          <Input
            value={formData.section}
            onChange={(e) => setFormData({ ...formData, section: e.target.value })}
            placeholder="Section name (e.g., homepage, about)"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Title</label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Section title"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Section description"
            className="min-h-32"
            required
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Image URL</label>
          <Input
            value={formData.image_url}
            onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <Button type="submit" disabled={saving} className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          {saving ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading content...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Content Management System</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList>
            <TabsTrigger value="content">Content Management</TabsTrigger>
            <TabsTrigger value="new">Add New Section</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {content.map((section) => (
                <Card key={section.id}>
                  <CardHeader>
                    <CardTitle className="capitalize">{section.section} Section</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContentForm section={section} />
                  </CardContent>
                </Card>
              ))}
              {content.length === 0 && (
                <Card className="col-span-full">
                  <CardContent className="text-center py-8">
                    <p className="text-gray-600">No content sections found. Add some content to get started.</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          <TabsContent value="new">
            <Card>
              <CardHeader>
                <CardTitle>Add New Content Section</CardTitle>
              </CardHeader>
              <CardContent>
                <ContentForm 
                  section={{
                    id: 0,
                    section: '',
                    title: '',
                    description: '',
                    image_url: ''
                  }} 
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
