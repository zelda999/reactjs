interface IProductProductRowProps {
  product: {
    name: string;
    price: string;
    stocked: boolean;
  };
}

const ProductRow = ({ product }: IProductProductRowProps) => {
  return (
    <div style={{ color: product.stocked ? 'inherit' : 'red' }}>
      {product.name} - {product.price}
    </div>
  );
};

export default ProductRow;
