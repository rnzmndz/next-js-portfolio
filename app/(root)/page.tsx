import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Home() {
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row w-full '>
      <div className='block flex-1 lg:hidden w-64 h-40'>
        <Image
          className='rounded-full overflow-hidden outline-1 object-cover border-gray-500'
          src='/my-picture.png'
          width={700}
          height={700}
          alt='My Picture'
        ></Image>
      </div>
      <div className='flex gap-10 flex-col pt-10 lg:items-start'>
        <h1 className='text-2xl text-gray-800'>Welcome to My Portfolio!</h1>
        <h3 className='text-4xl'>I’M RENZO,</h3>
        <p className='text-justify max-w-prose lg:max-w-150 text-gray-700'>
          A Mechanical Engineer transitioning into Full-Stack Web Development.{' '}
          <br /> <br /> I'm passionate about building modern, efficient web
          applications using Java Spring Boot and Next.js. While I'm still early
          in my developer journey, I'm constantly learning and growing —
          preparing to contribute to real-world projects and collaborate with
          great teams. <br /> <br /> This portfolio is where I share my
          progress, projects, and professional story. Thanks for stopping by!
        </p>

        <Link
          href='/about'
          className='flex items-center border border-gray-600 py-2 px-6 gap-2 rounded hover:bg-black hover:text-white active:bg-gray-500'
        >
          <span>Learn More</span>
        </Link>
      </div>
      <div className='hidden lg:block ml-auto p-15 items-center'>
        <Image
          className='rounded-full overflow-hidden outline-1 object-cover'
          src='/my-picture.png'
          width={400}
          height={400}
          alt='My Picture'
        ></Image>
      </div>
    </div>
  );
}

export default Home;
