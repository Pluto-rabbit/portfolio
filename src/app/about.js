import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python',
    'Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'
  ];

  const experiences = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading the frontend development team and architecting scalable solutions.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Co.',
      period: '2020 - 2022',
      description: 'Developed and maintained full-stack applications using modern technologies.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Passionate developer dedicated to creating meaningful web experiences. 
          I love coding, learning new things, and sharing knowledge with others.
        </p>
      </div>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
          <CardDescription>Technologies I work with regularly</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
          <CardDescription>Where I've worked</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-lg">{exp.role}</h3>
                <p className="text-gray-600">{exp.company} | {exp.period}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Personal Projects Section */}
      <Card>
        <CardHeader>
          <CardTitle>What I Do</CardTitle>
          <CardDescription>My interests and activities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            In my free time, I enjoy working on personal projects, contributing to open source,
            and exploring new technologies. I'm particularly interested in web performance optimization
            and building accessible user interfaces.
          </p>
          <p>
            I also write technical articles and occasionally speak at local tech meetups
            to share my knowledge and experiences with the community.
          </p>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card>
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
          <CardDescription>Find me on social media or send me an email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 justify-center">
            <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;