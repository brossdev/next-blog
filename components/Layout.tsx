import React from 'react';
import { MetaProps } from '../types';
import Head from './Head';
import Nav from './Nav';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'www.bobbyross.dev'

const Layout = ({ children, customMeta }: LayoutProps) => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div className="max-w-5xl px-8 mx-auto">
          <div className="flex items-center justify-between py-6">
            <Nav/>
            <ThemeSwitch />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-5xl px-8 py-4 mx-auto">{children}</div>
      </main>
      <footer className="py-8">
        <div className="max-w-5xl px-8 mx-auto">
          Built by{' '}
          <a
            className="text-gray-900 dark:text-white"
            href="https://twitter.com/brossdev"
          >
            Bobby Ross
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
