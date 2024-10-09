import NextLink from 'next/link';
import { Github, Linkedin, Link2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Full-stack developer passionate about creating innovative web solutions. Always learning and exploring new technologies.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NextLink href="#hero" className="text-sm hover:underline">Home</NextLink></li>
              <li><NextLink href="#projects" className="text-sm hover:underline">Projects</NextLink></li>
              <li><NextLink href="#skills" className="text-sm hover:underline">Skills</NextLink></li>
              <li><NextLink href="#contact" className="text-sm hover:underline">Contact</NextLink></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <NextLink href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </NextLink>
              <NextLink href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </NextLink>
              <NextLink href="https://yourwebsite.com" target="_blank" rel="noreferrer">
                <Link2 className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </NextLink>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center text-sm text-muted-foreground">
          <p>Built with Next.js, React, Tailwind CSS, and shadcn/ui</p>
          <p>© 2024 Maximilien Rouillon Zhu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;