import Navbar from '@/components/Navbar';
import React from 'react';

function Home() {
  return (
    <div>
      <div className="flex flex-col items-center lg:items-start gap-y-5">
        <h1 className="text-2xl">Welcome to My Portfolio</h1>
        <h3 className="text-4xl">I’M RENZO,</h3>
        <p className="mx-auto text-justify max-w-prose lg:max-w-none">
          An Engineering Innovator with a passion for design and
          problem-solving. From Mechanical engineering to software and
          electronics, I bring creativity and precision to every project.
          Explore my portfolio to see how engineering versatility come together.
        </p>
      </div>
    </div>
  );
}

export default Home;
