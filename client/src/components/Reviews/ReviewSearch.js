import React from 'react';
import styled from 'styled-components';

const Searchinput = styled.input`
  width: 100%
`;

const ReviewSearch = ({ data, setReviewsData }) => {
  const searchItems = (value) => {
    if (value.length >= 3) {
      const searchedData = data.filter((item) => item.body.toLowerCase().includes(value.toLowerCase())
        || item.summary.toLowerCase().includes(value.toLowerCase()));
      setReviewsData(searchedData);
    } else {
      setReviewsData(data);
    }
  };
  return (
    <Searchinput onChange={(e) => { searchItems(e.target.value); }} />
  );
};

export default ReviewSearch;
