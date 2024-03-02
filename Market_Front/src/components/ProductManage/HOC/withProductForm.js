import React from "react";

const withProductForm = (WrappedComponent, onSubmit,  loading ,isAdd) => {
  return (props) => {
    const { product } = props;

    return (
      <WrappedComponent
        {...props}
        onSubmit={(data, selectedCategoryId) =>
          onSubmit(data, selectedCategoryId, product)
        }
        product={product}
        loading={loading}
        isAdd={isAdd}
      />
    );
  };
};

export default withProductForm;
