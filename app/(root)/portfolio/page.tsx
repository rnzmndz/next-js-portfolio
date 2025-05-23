import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Portfolio = {
  link: string;
  source: string;
  title: string;
};

const portfolios: Portfolio[] = [
  {
    link: 'https://drive.google.com/drive/folders/1YfcVchKU-py8Wrg_uXmGby2NjMl0-ix4?usp=drive_link',
    source: '/CAD.jpg',
    title: 'CAD Works',
  },
  {
    link: 'https://drive.google.com/drive/folders/1mo-R_-_X6K8DoO_h8wbi19ITymlZlsJ8?usp=drive_link',
    source: '/fire-protection.jpg',
    title: 'Fire Protection Works',
  },
];

function PortfolioSection({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className='relative flex w-full h-64 overflow-hidden items-center justify-center rounded-4xl shadow-lg border border-gray-300'>
      <Link href={portfolio.link} target='_blank' className='group'>
        <Image
          src={portfolio.source}
          height={700}
          width={700}
          alt={portfolio.title}
          className='w-full h-auto object-cover transition duration-300 group-hover:blur-xs group-hover:scale-110'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-5xl font-bold bg-opacity-40 rounded-xl bg-gray-100/60 p-2'>
            {portfolio.title}
          </span>
        </div>
      </Link>
    </div>
  );
}

function Page() {
  return (
    <div className='flex flex-col items-center justify-center gap-10 pb-20'>
      {portfolios.map((portfolio, index) => (
        <PortfolioSection portfolio={portfolio} key={index} />
      ))}
    </div>
  );
}

export default Page;
