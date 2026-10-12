import ProductCard from './ProductCard'

function ProductList(props) {
  return (
  <div className="product-grid">
    {props.products.map((producto) => (
      <ProductCard
        key={producto.id}
        title={producto.title}
        price={producto.price}
        thumbnail={producto.thumbnail}
      />
     ))}
   </div>
  )
}

export default ProductList