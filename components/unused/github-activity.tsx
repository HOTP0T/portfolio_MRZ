"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface GithubEvent {
  type: string;
  repo: string;
  createdAt: string;
}

const GithubActivity = () => {
  const [activity, setActivity] = useState<GithubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github-activity')
      .then((res) => res.json())
      .then((data) => {
        setActivity(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching GitHub activity:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading GitHub activity...</div>;
  }

  return (
    <section className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Recent GitHub Activity
      </motion.h2>
      <div className="space-y-4">
        {activity.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{event.repo}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <Badge>{event.type}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {new Date(event.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default GithubActivity;