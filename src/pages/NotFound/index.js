import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      fontSize: 30,
      padding: 20,
    }}
    >
      Entre na url
      {' '}
      <Link to="/free-shipping">/free-shipping</Link>
      {' '}
      ou
      {' '}
      <Link to="/standard-shipping">/standard-shipping</Link>
      {' '}
      Para testar os cenários!
    </div>
  );
}
