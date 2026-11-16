function Card({ title, body, image }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
      <img src={image} alt={title} />
    </article>
  )
}

export default Card
