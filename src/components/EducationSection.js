export default function EducationSection({ id, content }) {
  return (
    <section id={id} className="section education-section" aria-labelledby={`${id}-title`}>
      <div className="wrap education-layout">
        <div className="education-intro" data-reveal>
          <h2 id={`${id}-title`}>{content.title}</h2>
          <p>{content.lead}</p>
        </div>
        <div className="education-stories">
          {content.articles.map(article => (
            <article key={article.title} data-reveal>
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
