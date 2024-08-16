// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';
import '../styles/global.css';

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="portfolio, web development, projects, blog" />
        <meta name="author" content="Your Name" />
        <meta name="language" content="English" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}