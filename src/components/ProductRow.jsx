function ProductRow({ product }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <div className="products__row">
      <div className="products__name">{product.name}</div>
      <div className="products__category">{product.category}</div>
      <div className="products__price">{formatCurrency(product.price)}</div>
    </div>
  );
}

export default ProductRow;
