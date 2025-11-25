import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-[gradient-xy_10s_ease_infinite] z-0"></div>
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-[text-gradient_3s_ease_infinite_alternate]">
            Hi, I&apos;m [Developer Name]
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A passionate UI/UX Designer crafting intuitive and delightful user experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
            <Button size="lg" className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg font-semibold border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300">
              Contact Me
            </Button>
          </div>
          {/* Placeholder for profile image or animation */}
          <div className="mt-8">
            {/* Add an illustrative element or image here */}
            {/* <img src="/path/to/profile.png" alt="Developer Profile" className="w-32 h-32 rounded-full mx-auto object-cover shadow-xl" /> */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-card text-card-foreground">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
            My Expertise
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Leveraging a diverse skill set to bring innovative and user-centric designs to life.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-green-500">UI Design</CardTitle>
                <CardDescription>Crafting visually appealing and intuitive interfaces.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Sketch</Badge>
                  <Badge variant="secondary">Adobe XD</Badge>
                  <Badge variant="secondary">Prototyping</Badge>
                  <Badge variant="secondary">Visual Hierarchy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-teal-500">UX Research</CardTitle>
                <CardDescription>Understanding user needs and behaviors through data.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">User Interviews</Badge>
                  <Badge variant="secondary">Surveys</Badge>
                  <Badge variant="secondary">Usability Testing</Badge>
                  <Badge variant="secondary">Persona Creation</Badge>
                  <Badge variant="secondary">Journey Mapping</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-cyan-500">Interaction Design</CardTitle>
                <CardDescription>Designing engaging and responsive interactions.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Animation</Badge>
                  <Badge variant="secondary">Microinteractions</Badge>
                  <Badge variant="secondary">Wireframing</Badge>
                  <Badge variant="secondary">Flows</Badge>
                  <Badge variant="secondary">Responsive Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-indigo-500">Design Systems</CardTitle>
                <CardDescription>Building scalable and consistent design frameworks.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Component Libraries</Badge>
                  <Badge variant="secondary">Style Guides</Badge>
                  <Badge variant="secondary">Atomic Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-purple-500">Tools & Technologies</CardTitle>
                <CardDescription>Proficiency in industry-standard design tools.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">Adobe Creative Suite</Badge>
                  <Badge variant="secondary">Miro</Badge>
                  <Badge variant="secondary">Jira</Badge>
                  <Badge variant="secondary">HTML/CSS (Basic)</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-pink-500">Methodologies</CardTitle>
                <CardDescription>Applying effective approaches to design challenges.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Design Thinking</Badge>
                  <Badge variant="secondary">Lean UX</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
