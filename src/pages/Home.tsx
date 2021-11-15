import { Container } from 'react-bootstrap';
import siteConfigurations from '../configs/site_configurations';
import Header from '../components/Header';
import Main from '../components/Main';

const Home = () => (
  <Container className="responsive-cards-app">
    <Header siteName={siteConfigurations.siteName} siteCreator={siteConfigurations.siteCreator} />
    <Main />
  </Container>
)

export default Home;
