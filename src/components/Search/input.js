import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import { SearchIcon, Form, Input } from './styles';

export default connectSearchBox(({ refine, rest }) => {
  const handleSearch = event =>
    event.target.value !== '' &&
    event.target.value !== undefined &&
    refine(event.target.value);

  return (
    <Form>
      <Input
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
        {...rest}
      />
      <SearchIcon />
    </Form>
  );
});
