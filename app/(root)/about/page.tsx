import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex flex-col lg:flex-row items-top pb-10'>
        <div className='lg:w-1/2 align-middle'>
          <h1 className='text-2xl pb-5'>Hello!</h1>
          <p className='justify-center lg:pr-10'>
            I’m a Mechanical Engineer with real-world experience in fire
            protection systems, automation, preventive maintenance, and
            engineering design. I’ve always loved planning, designing, and
            solving problems — and now I’m applying that mindset to a new field:
            full-stack web development. <br /> <br />
            Web development excites me because it's another way to bring ideas
            to life. After exploring the world of mechanical engineering, I’m
            ready to explore a new path — one that involves building useful,
            scalable, and impactful software.
          </p>
        </div>

        <div className='hidden lg:block'>
          <Image
            className='rounded-3xl shadow-2xl'
            src='/engineer.jpg'
            width={300}
            height={300}
            alt='engineer picture'
          />
        </div>
      </div>
      <div>
        <h1 className='text-2xl pb-5'>My Tech Stacks</h1>
      </div>
    </div>
  );
}

export default Page;
