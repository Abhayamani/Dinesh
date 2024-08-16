// pages/index.js
import Layout from '../components/Layout';
import '../styles/global.css';

export default function Home() {
  return (
    <Layout title="Home - My Portfolio" description="Welcome to my portfolio website">
      <div className="container text-center mt-5">
        <h1 className="display-4">Welcome to My Portfolio</h1>
        <p className="lead">
          This is my personal website where I showcase my projects and share my thoughts.
        </p>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>CSS & HTML</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}