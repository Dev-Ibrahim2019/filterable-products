
import ProductRow from './ProductRow';

function ProductList({ products }) {
  return (
    <section className="products">
      {products.map((product) => (
        <ProductRow key={product.name} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
