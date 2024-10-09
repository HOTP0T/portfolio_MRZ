import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            I'm a passionate full-stack developer with a keen interest in creating innovative web solutions. 
            With expertise in modern technologies like React, Node.js, and cloud platforms, I strive to build 
            scalable and efficient applications that solve real-world problems.
          </p>
          <p className="text-muted-foreground mb-4">
            My journey in tech has been driven by curiosity and a constant desire to learn. I enjoy tackling 
            complex challenges and collaborating with teams to deliver high-quality software products.
          </p>
          <p className="text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source 
            projects, or sharing my knowledge through tech blogs and community events.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;