const ProductCategoryRow = ({
  category
}: {
  category: string;
}): JSX.Element => {
  return (
    <div className="product-category">
      <strong>{category}</strong>
    </div>
  );
};

export default ProductCategoryRow;
