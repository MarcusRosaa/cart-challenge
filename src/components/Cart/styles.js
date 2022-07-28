import styled from 'styled-components';

export const Container = styled.div`
  @media(max-width: 500px) {
    width: 280px;
  }

  width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
  position: absolute;
  opacity: ${({ open }) => (open === false ? '0' : '1')};
  flex-direction: column;

  transition: opacity 0.2s ease-in-out;

  right: 0;
  top: 40px;
`;

export const Title = styled.h3`
  padding: 12px;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

export const CardContainer = styled.div`
  overflow: auto;
  max-height: 390px;

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #ccc;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #bbb;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #3335;
}
`;

export const Card = styled.div`
  padding: 14px;
  display: flex;

  .image {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;

    img {
      width: inherit;
      height: 100%;
      object-fit: contain;
    }
  }

  .info {
    font-size: 12px;
    padding: 4px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .prices {
      small {
        color: #ACABAB;
        font-weight: 500;
        font-size: 11px;
        margin: 4px 0 2px 0;
        display: block;
      }

      .selling-price {
        font-weight: 500;
      }
    }
  }
`;

export const CartFooter = styled.div`
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 24px 14px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 0;
`;

export const FooterTitle = styled.p`
  font-weight: bold;
`;

export const TotalPrice = styled.p`
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 20px 14px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  border: none;
  background: #3b74f2;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Message = styled.p`
  @media(max-width: 500px) {
    font-size: 10px;
  }

  color: #137a1e;
  background: #c4ffae;
  padding: 8px;
  border-radius: 100px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin: 18px 0 0;
`;
