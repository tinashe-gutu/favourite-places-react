import {getFavPlacesData} from "./utils/getFavPlacesData"

function App(): JSX.Element {
  const FavPlaces = getFavPlacesData()

  return (
    <>
      <h1>Tinashe's Favourite Places</h1>
      {FavPlaces}
      <footer>
        <i>
          images from <a href="https://unsplash.com/">unsplash.com</a>
        </i>
      </footer>
    </>
  );
}

export default App;
