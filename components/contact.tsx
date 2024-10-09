"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <form className="w-full max-w-md space-y-6">
          <Input placeholder="Your name" />
          <Input type="email" placeholder="Your email" />
          <Textarea placeholder="Your message" />
          <Button type="submit" className="w-full btn-primary hover-lift">
            Send Message
          </Button>
        </form>
        <div className="flex items-center justify-center">
          <Avatar className="h-48 w-48">
            <AvatarImage src="/path-to-your-image.jpg" alt="Profile" />
            <AvatarFallback>
              <User className="h-24 w-24" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Contact;