import Layout from '../components/Layout';
import '../styles/global.css';

export default function About() {
  return (
    <Layout title="About - My Portfolio" description="Learn more about me">
      <div className="container mt-5">
        <h1>About Me</h1>
        <p>Hello! I&apos;m a web developer with a passion for creating beautiful and functional websites.</p>
        <p>Skills: JavaScript, React, Next.js, Node.js, and more.</p>
      </div>
    </Layout>
  );
}
