import { Metadata } from 'next';
import React from 'react';

type Service = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: 'Services',
};

const engineeringServices: Service[] = [
  {
    title: 'Fire Protection System Design',
    description: 'NFPA-compliant system planning, drawings, and calculation',
  },
  {
    title: 'Fire Detection & Alarm Systems',
    description: 'Layout, estimation, and specification preparation',
  },
  {
    title: 'Preventive Maintenance Planning',
    description: 'Scheduling and optimization of equipment servicing',
  },
  {
    title: 'Automation & Control Concepts',
    description: 'Basic automation logic design for machinery or systems',
  },
];

const webDevelopmentServices: Service[] = [
  {
    title: 'Custom Web Applications',
    description:
      'Business tools, dashboards, or internal apps using Java Spring Boot + Next.js',
  },
  {
    title: 'Engineering Tools Development',
    description:
      'Custom calculators, data input/output tools, or automation interfaces',
  },
  {
    title: 'Database Design & Integration',
    description:
      'PostgreSQL-based systems, schema design, and REST API integrations',
  },
  {
    title: 'ERP Prototype or Modules',
    description: 'Inventory, maintenance scheduling, or estimation modules',
  },
];

function ServicesSection({
  serviceList,
  title,
}: {
  serviceList: Service[];
  title: string;
}) {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold pb-5'>{title}</h1>
      <div className='flex flex-row gap-5 items-center justify-center flex-wrap'>
        {serviceList.map((service, index) => (
          <div
            className='p-6 w-64 min-h-[200px] border border-gray-200 rounded-2xl text-center shadow-xl'
            key={index}
          >
            <h1 className='h-20 font-bold flex justify-center items-center'>
              {service.title}
            </h1>
            <p className='text-gray-700'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Page() {
  return (
    <div className='flex flex-col gap-10 pb-20'>
      <ServicesSection
        title='Engineering Services'
        serviceList={engineeringServices}
      />
      <ServicesSection
        title='Web Development Services'
        serviceList={webDevelopmentServices}
      />
    </div>
  );
}

export default Page;
