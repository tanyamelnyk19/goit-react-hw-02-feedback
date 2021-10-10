import './Section.css';

export default function Section({ title, children }) {
  return (
    <section className="section">
      <h1 className="title">{title}</h1>
      {children}
    </section>
  );
}
