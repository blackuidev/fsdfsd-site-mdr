import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin, X } from "lucide-react";

// ContactForm component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-card rounded-lg shadow-lg dark:bg-[#1d1c1cff]">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Subject
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-1 block w-full"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="mt-1 block w-full"
        />
      </div>
      <Button type="submit" className="w-full bg-primarylw text-white hover:bg-primarylw/90">
        Send Message
      </Button>
    </form>
  );
};

// Main ContactPage component
const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-gray-50 mb-10">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Have a question, a project idea, or just want to say hello? Feel free to reach out using the form or direct contact methods below. We&apos;d love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Mail className="h-5 w-5 text-primarylw" />
                <span>contact@lightswind.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <Phone className="h-5 w-5 text-primarylw" />
                <span>+1 (123) 456-7890</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Connect with Us</h3>
              <div className="flex space-x-6">
                <a href="https://github.com/codewithmuhilan" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primarylw transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/codewithmuhilan66/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primarylw transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/codewithmuhilan" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-primarylw transition-colors">
                  <X className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
