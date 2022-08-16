import logo from './logo.svg';
import './App.css';
import NavbarWishlist from './components/NavbarWishlist';
import LoginForm from './components/LoginForm';
import Container from 'react-bootstrap/esm/Container';
import FooterWishlist from './components/FooterWishlist';

function App() {
  return (
    <div className="App">
      <NavbarWishlist>
      </NavbarWishlist>
      <Container>
        <LoginForm></LoginForm>
      </Container>
      <header className="App-header">

      </header>
      <footer>
        <FooterWishlist></FooterWishlist>
      </footer>
    </div>
  );
}

export default App;
