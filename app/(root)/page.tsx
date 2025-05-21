import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row w-full ">
      <div className="block flex-1 lg:hidden w-64 h-40">
        <Image
          className="rounded-full overflow-hidden outline-1 object-cover border-gray-500"
          src="/my-picture.png"
          width={700}
          height={700}
          alt="My Picture"
        ></Image>
      </div>
      <div className="flex gap-10 flex-col pt-10 lg:items-start">
        <h1 className="text-2xl">Welcome to My Portfolio</h1>
        <h3 className="text-4xl">I’M RENZO,</h3>
        <p className="text-justify max-w-prose lg:max-w-150">
          An Engineering Innovator with a passion for design and
          problem-solving. From Mechanical engineering to software and
          electronics, I bring creativity and precision to every project.
          Explore my portfolio to see how engineering versatility come together.
        </p>
      </div>
      <div className="hidden lg:block ml-auto p-15 items-center">
        <Image
          className="rounded-full overflow-hidden outline-1 object-cover border-gray-500"
          src="/my-picture.png"
          width={400}
          height={400}
          alt="My Picture"
        ></Image>
      </div>
    </div>
  );
}

export default Home;
