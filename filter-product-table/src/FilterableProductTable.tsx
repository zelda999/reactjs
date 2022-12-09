import { useState } from 'react';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';

import { mockData as products } from './mock/data';

const FilterableProductTable = () => {
  const [searchText, setSearchText] = useState('');
  const [isStock, setIsStock] = useState(false);

  return (
    <>
      <h3>Product Table Filter</h3>
      <SearchBar
        onHandleSearch={(value) => setSearchText(value)}
        onHandleStock={(value) => setIsStock(value)}
      />
      <ProductTable
        products={products}
        filterText={searchText}
        statusStock={isStock}
      />
    </>
  );
};

export default FilterableProductTable;
