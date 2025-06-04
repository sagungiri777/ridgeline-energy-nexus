
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react';

interface LogEntry {
  id: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
  message: string;
  user?: string;
}

const SystemLogs = () => {
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      timestamp: new Date().toISOString(),
      type: 'success',
      message: 'Admin panel initialized successfully',
      user: 'System'
    },
    {
      id: '2',
      timestamp: new Date(Date.now() - 60000).toISOString(),
      type: 'info',
      message: 'User authentication system activated',
      user: 'System'
    },
    {
      id: '3',
      timestamp: new Date(Date.now() - 120000).toISOString(),
      type: 'info',
      message: 'Database connection established',
      user: 'System'
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-600" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-600" />;
      default:
        return <Info className="h-4 w-4 text-blue-600" />;
    }
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case 'success':
        return 'default';
      case 'warning':
        return 'secondary';
      case 'error':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>System Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                {getIcon(log.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <Badge variant={getBadgeVariant(log.type)}>
                      {log.type.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {new Date(log.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 mt-1">{log.message}</p>
                  {log.user && (
                    <p className="text-xs text-gray-500 mt-1">by {log.user}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default SystemLogs;
