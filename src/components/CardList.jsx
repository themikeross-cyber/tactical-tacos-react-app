import Card from './Card.jsx'

function CardList({ items }) {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          body={item.body}
          image={item.image}
        />
      ))}
    </>
  )
}

export default CardList
