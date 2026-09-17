const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      
      <div className="flex h-56 items-center justify-center bg-gray-50 p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

     
      <div className="p-4">

        <h2 className="truncate text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 h-10 overflow-hidden text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">
            ${product.price}
          </span>

          <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
            ⭐ {product.rating}
          </span>
        </div>

        <button className="mt-4 w-full rounded-lg bg-pink-500 py-2 font-medium text-white transition hover:bg-pink-600">
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;