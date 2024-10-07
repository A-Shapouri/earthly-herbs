import Container from '@elements/container';
import Intro from './components/intro';
import Products from './components/products';
import Blends from './components/blends';
import AboutEarthly from './components/about-earthly';
import Articles from './components/articles';
import Newsletter from './components/newsletter';

const Home = () => {
  return (
    <Container>
      <Intro />
      <Products />
      <Blends />
      <AboutEarthly />
      <Articles />
      <Newsletter />
    </Container>
  );
};

export default Home;
