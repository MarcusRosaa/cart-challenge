import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

export default function Home() {
  // Get the shipping method by url params
  const { shippingMethod } = useParams();

  return (
    <Header shippingMethod={shippingMethod} />
  );
}
