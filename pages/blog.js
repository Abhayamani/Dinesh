// pages/blog.js
import Layout from '../components/Layout';
import '../styles/global.css';

export default function Blog() {
  return (
    <Layout title="Blog - My Articles" description="Read my latest articles">
      <div className="container mt-5">
        <h1>Blog</h1>
        <div className="article">
          <h2>Understanding React Hooks</h2>
          <p>React Hooks are functions that let you use state and other React features without writing a class...</p>
        </div>
        <div className="article">
          <h2>Introduction to Next.js</h2>
          <p>Next.js is a powerful framework for building server-side rendered React applications...</p>
        </div>
      </div>
    </Layout>
  );
}