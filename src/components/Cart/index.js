import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../Loader';

import ProductsService from '../../services/ProductsService';

import formatPrice from '../../utils/formatPrice';

import {
  Button,
  ButtonWrapper,
  Card, CardContainer, CartFooter, Container, FooterTitle, Infos, Message, Title, TotalPrice,
} from './styles';

export default function Cart({ open }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Get the shipping method by url params
  const { shippingMethod } = useParams();

  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true);

        const productsList = await ProductsService.listProducts(shippingMethod);

        setProducts(productsList);
      } catch (error) {
        console.log(error.name);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [shippingMethod]);

  return (
    <Container open={open}>
      <Loader isLoading={isLoading} />

      <Title>Meu carrinho</Title>
      <CardContainer>
        {products.length > 0 && products[0].items.map((product) => (
          <Card key={product.id}>
            <div className="image">
              <img src={product.imageUrl} alt="produto" />
            </div>
            <div className="info">
              <div className="product-name">
                <strong>{product.name}</strong>
              </div>

              <div className="prices">
                {product.sellingPrice < product.price && (
                  <small>{formatPrice(product.price)}</small>
                )}

                {
                  product.sellingPrice > 0
                    ? (
                      <p className="selling-price">
                        {formatPrice(product.sellingPrice)}
                      </p>
                    )
                    : (
                      <p className="selling-price">
                        {formatPrice(product.price)}
                      </p>
                    )
                }
              </div>

            </div>
          </Card>
        ))}
      </CardContainer>
      <CartFooter>
        <Infos>
          <FooterTitle>
            Total
          </FooterTitle>
          <TotalPrice>
            {
              products.length && formatPrice(products[0].value)
            }
          </TotalPrice>
          {
            products.length && (products[0].value / 100) > 10
            && (
            <Message>
              Parabéns, sua compra tem frete grátis !
            </Message>
            )
          }
        </Infos>

        <ButtonWrapper>
          <Button>
            Finalizar Compra
          </Button>
        </ButtonWrapper>
      </CartFooter>
    </Container>
  );
}

Cart.propTypes = {
  open: PropTypes.bool.isRequired,
};
