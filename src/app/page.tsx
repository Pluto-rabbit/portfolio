import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Home() {
  const skills = {
    "Frontend": ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    "Tools": ["Git", "GitHub", "GitLab", "AWS", "Azure", "Figma", "Adobe XD"]
  };

  const certifications = [
    "Developing Cloud Applications with Node.js (IBM)",
    "Designing the User Experience (University System of Maryland)",
    "Foundations of User Experience (UX) Design (Google)"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Rohit Kumar</h1>
          <h2 className="text-2xl text-muted-foreground mb-6">Front-End Developer</h2>
          <p className="text-lg mb-8">
            Creative front-end developer with 2 years of experience crafting engaging digital experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="default" className="gap-2">
              <Mail size={16} />
              kumarohit61@gmail.com
            </Button>
            <Button variant="outline" className="gap-2">
              <Phone size={16} />
              7488087418
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <Card>
          <CardHeader>
            <CardTitle>Front-End Developer at Booknerds</CardTitle>
            <p className="text-sm text-muted-foreground">May 2022 - Present</p>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6 space-y-2">
              <li>Led and managed website development team</li>
              <li>Provided expert client consultation for website strategies</li>
              <li>Designed user-friendly interfaces and optimized performance</li>
              <li>Collaborated with cross-functional teams on scalable solutions</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map(skill => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Master of Computer Applications</CardTitle>
              <p className="text-muted-foreground">
                Bharati Vidyapeeth Institute | 10 CGPA
              </p>
            </CardHeader>
            <CardContent>
              <p>Aug 2020 - Aug 2022</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Bachelor of Computer Applications</CardTitle>
              <p className="text-muted-foreground">
                St. Xavier's College | 7.9 CGPA
              </p>
            </CardHeader>
            <CardContent>
              <p>June 2017 - Aug 2020</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert}>
              <CardContent className="pt-6">
                <p className="text-center">{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}