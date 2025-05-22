import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React from 'react';

type IconItem = {
  icon: string;
};

const languageIcons: IconItem[] = [
  { icon: 'skill-icons:java-dark' },
  { icon: 'skill-icons:javascript' },
  { icon: 'skill-icons:python-dark' },
];

const frontendIcons: IconItem[] = [
  { icon: 'skill-icons:html' },
  { icon: 'skill-icons:css' },
  { icon: 'skill-icons:javascript' },
  { icon: 'skill-icons:react-dark' },
  { icon: 'skill-icons:tailwindcss-dark' },
  { icon: 'skill-icons:nextjs-dark' },
];

const backendIcons: IconItem[] = [
  { icon: 'skill-icons:java-dark' },
  { icon: 'skill-icons:spring-dark' },
];

const databaseIcons: IconItem[] = [
  { icon: 'skill-icons:postgresql-dark' },
  { icon: 'skill-icons:mysql-dark' },
];

const toolsIcon: IconItem[] = [
  { icon: 'skill-icons:figma-dark' },
  { icon: 'skill-icons:vscode-dark' },
  { icon: 'devicon:intellij' },
  { icon: 'skill-icons:eclipse-dark' },
  { icon: 'skill-icons:maven-dark' },
  { icon: 'skill-icons:postman' },
  { icon: 'skill-icons:git' },
  { icon: 'skill-icons:github-dark' },
];

function IconListSection({
  title,
  icons,
}: {
  title: string;
  icons: IconItem[];
}) {
  return (
    <div>
      <h1 className="text-xl pb-1">{title}</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {icons.map((item, index) => (
          <Icon
            key={index}
            icon={item.icon}
            className="h-12 w-auto shadow-2xl"
          />
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className="flex flex-col justify-center p-7 gap-10">
      <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between items-top">
        <div className="lg:w-1/2 align-middle">
          <h1 className="text-2xl pb-5 font-bold">About Me</h1>
          <p className="justify-center lg:pr-10 text-gray-700">
            I&apos;m a Mechanical Engineer with real-world experience in fire
            protection systems, automation, preventive maintenance, and
            engineering design. I&apos;ve always loved planning, designing, and
            solving problems — and now I&apos;m applying that mindset to a new
            field: full-stack web development. <br /> <br />
            Web development excites me because it&apos;s another way to bring
            ideas to life. After exploring the world of mechanical engineering,
            I&apos;m ready to explore a new path — one that involves building
            useful, scalable, and impactful software.
          </p>
        </div>

        <div className="pb-10">
          <Image
            className="rounded-3xl shadow-2xl"
            src="/engineer.jpg"
            width={400}
            height={400}
            alt="engineer picture"
          />
        </div>
      </div>

      <div className="lg:w-1/2 align-middle">
        <h1 className="text-2xl pb-5 font-bold">My Goals</h1>
        <p className="justify-center lg:pr-10 text-gray-700 pb-3">
          In the short term, I&apos;m seeking opportunities as a Junior Web Developer
          to grow through hands-on experience. In the long run, I aim to:
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Build ERP systems and business tools</li>
          <li>
            Develop engineering-focused apps (like calculators or analysis
            tools)
          </li>
          <li>Contribute to open-source or collaborative projects</li>
        </ul>
      </div>

      <div className="lg:w-1/2 align-middle">
        <h1 className="text-2xl pb-5 font-bold">Outside of Tech</h1>
        <p className="justify-center lg:pr-10 text-gray-700">
          I bring a problem-solving mindset shaped by real engineering
          challenges. Whether it&apos;s troubleshooting a machine or designing a
          database schema, I love the process of turning complexity into
          clarity.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">My Tech Stacks</h1>
        <IconListSection title="Languages" icons={languageIcons} />
        <IconListSection title="Front End" icons={frontendIcons} />
        <IconListSection title="Back End" icons={backendIcons} />
        <IconListSection title="Database" icons={databaseIcons} />
        <IconListSection title="Tools & Platform" icons={toolsIcon} />
      </div>

      <div className="lg:w-1/2 align-middle">
        <h1 className="text-2xl pb-5 font-bold">Site in Progress</h1>
        <p className="justify-center lg:pr-10 text-gray-700">
          This portfolio is actively evolving, just like my journey. Stay tuned
          — I&apos;ll be sharing my projects, experiments, and learning milestones
          here.
        </p>
      </div>
    </div>
  );
}

export default Page;
