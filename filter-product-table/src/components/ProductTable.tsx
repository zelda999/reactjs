import { IProductProps } from '../types';
import ProductCategoryRow from './ProductCategoryRow';

import ProductRow from './ProductRow';

interface IProductTableProps extends IProductProps {
  filterText: string;
  statusStock: boolean;
}

const ProductTable = ({
  products,
  filterText,
  statusStock
}: IProductTableProps) => {
  let lastCategory = '';
  const rows: any[] = [];

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1)
      return;
    if (!product.stocked && statusStock) return;
    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(
        <ProductCategoryRow key={product.category} category={lastCategory} />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
  });
  return <>{rows}</>;
};

export default ProductTable;
