import './App.css';
import NavbarWishlist from './components/layout/NavbarWishlist';
import LoginForm from './components/auth/LoginForm';
import Container from 'react-bootstrap/esm/Container';
import FooterWishlist from './components/layout/FooterWishlist';

function App() {
  return (
    <div className="App">
      <NavbarWishlist>
      </NavbarWishlist>
      <Container>
        {/* <LoginForm></LoginForm> */}
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
