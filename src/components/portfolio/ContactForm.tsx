"use client";

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to an API endpoint
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Check console for data)');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 bg-card rounded-lg shadow-lg border border-gray-200 dark:border-[#1a1b1b]">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Get in Touch</h2>
      <p className="text-center text-gray-600 dark:text-gray-300">Have a question or want to work together? Send me a message!</p>

      <div>
        <Label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <Label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Regarding your project..."
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <Label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="mt-1 block w-full"
        />
      </div>

      <Button type="submit" className="w-full py-2 px-4 bg-primarylw text-white rounded-md hover:bg-primarylw/90 focus:outline-none focus:ring-2 focus:ring-primarylw focus:ring-offset-2">
        Send Message
      </Button>
    </form>
  );
}
