import React from 'react';

interface ISearchBarProps {
  onHandleSearch: (value: string) => void;
  onHandleStock: (value: boolean) => void;
}

const SearchBar = ({ onHandleSearch, onHandleStock }: ISearchBarProps) => {
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    onHandleSearch(e.target.value);
  };

  const onChangeStock = (e: React.ChangeEvent<HTMLInputElement>) => {
    onHandleStock(e.target.checked);
  };

  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => onChangeText(e)}
      />
      <br />
      <input type="checkbox" onChange={(e) => onChangeStock(e)} /> Only Stock
    </form>
  );
};

export default SearchBar;
