import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export function Index2() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
    </main>
  );
}

export default function Index() {
  return (
    <main>
      <div>About</div>
      <div>Experience</div>
      <div>Skills</div>
      <div>Education</div>
      <div>Blog</div>
      <Landing />
    </main>
  );
}

function Landing() {
  return (
    <div>
      <Hello />
      <About />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

function Hello() {
  return <div>Hello I'm Sairam charan</div>;
}

function About() {
  return (
    <div>
      <p>About</p>
      <div>Im Sairam, Software engineer</div>
      <div>Current designation:</div>
      <div>Software engineer II at Postman Inc</div>
      <div>Check out my resume</div>
      <div>Github</div>
      <div>Contact me here</div>
      <div>Email: mohanvenkat459@gmail.com</div>
      <div>Phone: +91 9566126921</div>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <div>Postman</div>
      <div>Kissflow</div>
      <div>Intellect design arena</div>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <div>Javascript</div>
      <div>Java</div>
      <div>Python</div>
      <div>Databases</div>
      <div>Infra</div>
    </div>
  );
}

function Education() {
  return <div>B.E. from Madras institute of technology, Anna university</div>;
}
