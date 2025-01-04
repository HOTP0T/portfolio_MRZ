"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useToast } from "./ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin, Mail, Link2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactAndFooter = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Client-side only logic to load external script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitting(false);
    toast({
      title: t('contact.success'),
      description: t('contact.successDescription'),
    });
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col justify-between min-h-screen">
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center md:space-x-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* External content */}
            <div className="elfsight-app-504d433a-1e36-4a53-889e-d92b57c64f3f" data-elfsight-app-lazy />
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Avatar className="h-64 w-64 mb-6">
              <AvatarImage src="/images/fc_profilepic_AZ.jpeg" alt="Profile" />
              <AvatarFallback>MZ</AvatarFallback>
            </Avatar>
            <p className="text-center text-lg font-medium italic mb-8">
              {t('contact.quote')}
            </p>
          </div>
        </div>
      </div>
      <footer className="mt-16 pt-8 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">{t('footer.name')}</h3>
            <p className="text-sm text-muted-foreground">{t('footer.role')}</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com/HOTP0T" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/maximilien-rouillon/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:maxrouillonzhu@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://hotp0t.link" target="_blank" rel="noopener noreferrer">
              <Link2 className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.builtWith')}</p>
        </div>
        <div className="elfsight-app-5586d26e-c84e-47d6-8231-f2a8f0a4f914" data-elfsight-app-lazy />
      </footer>
    </div>
  );
};

export default ContactAndFooter;