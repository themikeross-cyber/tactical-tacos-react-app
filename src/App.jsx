import Header from './components/Header.jsx'
import CardList from './components/CardList.jsx'

const items = [
  {
    id: 1,
    title: "SNAFU",
    body: "Smoky jalapeño sauce. 1/5 heat. Orange, lemon, and lime juice base — no vinegar.",
    image: "/photos/SNAFU.jpg"
  },
  {
    id: 2,
    title: "Green Beret",
    body: "Salsa verde with a ton of cilantro, serrano, and jalapeño. 2/5 heat. Citrus juice base — no vinegar.",
    image: "/photos/GreenBeret.jpg"
  },
  {
    id: 3,
    title: "Fire Fight",
    body: "SNAFU base with chipotle and habanero. 3/5 heat. Orange, lemon, and lime juice — no vinegar.",
    image: "/photos/FireFight.jpg"
  },
  {
    id: 4,
    title: "Ghost Protocol",
    body: "Fire Fight with extra chipotle and ghost peppers. Smokier and hotter. 4/5 heat. Citrus juice base — no vinegar.",
    image: "/photos/GhostProtocol.jpg"
  },

  {
  id: 5,
  title: "Test Sauce",
  body: "Just a placeholder to prove the list updates from data.",
  image: "/photos/SNAFU.jpg"
  }
 ]

function App() {
  return (
    <>
      <Header title="Tactical Tacos" />
      <CardList items={items} />
    </>
  )
}

export default App
