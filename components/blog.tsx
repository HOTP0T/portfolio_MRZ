"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the emerging technologies and methodologies shaping the future of web development.',
    date: '2023-05-15',
    tags: ['Web Development', 'Trends'],
    readTime: '5 min read',
  },
  {
    title: 'Optimizing React Applications for Performance',
    excerpt: 'Learn advanced techniques to boost the performance of your React applications.',
    date: '2023-04-22',
    tags: ['React', 'Performance'],
    readTime: '8 min read',
  },
  {
    title: 'Building Scalable Backend Systems with Node.js',
    excerpt: 'Discover best practices for creating robust and scalable backend systems using Node.js.',
    date: '2023-03-10',
    tags: ['Node.js', 'Backend', 'Scalability'],
    readTime: '10 min read',
  },
];

const BlogPost: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Card>
    <CardHeader>
      <CardTitle>{post.title}</CardTitle>
      <CardDescription>{post.date} • {post.readTime}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">{post.excerpt}</p>
    </CardContent>
    <CardFooter className="flex justify-between items-center">
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </div>
      <Button variant="ghost" size="sm">
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

const Blog: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="blog" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Latest Blog Posts
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogPost post={post} />
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button size="lg">
          View All Posts <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Blog;