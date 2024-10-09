"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    content: 'Working with this developer was a game-changer for our project. Their expertise in full-stack development brought our vision to life.',
    avatar: 'https://source.unsplash.com/random/100x100?face1',
  },
  {
    name: 'Jane Smith',
    role: 'CTO, InnovateTech',
    content: 'Exceptional problem-solving skills and a keen eye for detail. This developer consistently delivered high-quality code and innovative solutions.',
    avatar: 'https://source.unsplash.com/random/100x100?face2',
  },
  {
    name: 'Alex Johnson',
    role: 'Product Manager, StartUp Inc.',
    content: 'Their ability to quickly grasp complex requirements and translate them into functional features was impressive. A true asset to any development team.',
    avatar: 'https://source.unsplash.com/random/100x100?face3',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-10"
      >
        Client Testimonials
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;