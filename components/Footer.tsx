import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className="p-5">
      <div className="flex justify-center text-center gap-1">
        <p className="text-sm leading-tight self-center">
          &copy; {new Date().getFullYear()} Renzo. Built with ❤️ using Next.js |
        </p>
        <div className="flex flex-row gap-1">
          <Link href="https://github.com/rnzmndz" target="_blank">
            <Icon icon="skill-icons:github-dark" className="h-8 w-auto" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/renzocmendoza/"
            target="_blank"
          >
            <Icon icon="skill-icons:linkedin" className="h-8 w-auto" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
