"use client"

import { useState } from "react";
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
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
            <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.email')}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder={t('contact.emailPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.message')}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t('contact.messagePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </Button>
              </form>
            </Form>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Avatar className="h-64 w-64 mb-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
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
            <a href="mailto:tpcmaky@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://hotp0t.link" target="_blank" rel="noopener">
                <Link2 className="h-5 w-5" />
                <span className="sr-only">Website</span>
              </a>
            {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-6 w-6" /> 
            </a>*/}
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.builtWith')}</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactAndFooter;