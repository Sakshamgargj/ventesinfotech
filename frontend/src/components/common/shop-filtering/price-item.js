import { useRouter } from "next/router";

const PriceItem = ({ id, min, max }) => {
  const router = useRouter();

  // handlePrice
  const handlePrice = (min, max) => {
    if (min) {
      router.push(`/shop?priceMin=${min}&max=${max}`);
    } else {
      router.push(`/shop?priceMax=${max}`);
    }
  };
  return (
    <div className="shop__widget-list-item">
      <input
        onChange={() => handlePrice(min, max)}
        type="checkbox"
        id={`higher-${id}`}
        checked={
          router.query.priceMin === `${min}` ||
          router.query.priceMax === `${max}`
            ? "checked"
            : false
        }
      />
      {max < 200 ? (
        <label htmlFor={`higher-${id}`}>
          <span className="rupee-symbol">₹</span>{min}.00 - <span className="rupee-symbol">₹</span>{max}.00
        </label>
      ) : (
        <label htmlFor={`higher-${id}`}>
          <span className="rupee-symbol">₹</span>{max}.00+
        </label>
      )}
      <style jsx>{`
        .rupee-symbol {
          position: relative;
          top: -2px; /* Moves the Rupee symbol slightly upwards */
          font-size: 0.9em; /* Slightly smaller size for alignment */
          margin-right: 2px; /* Adds a little space between the symbol and the number */
        }
      `}</style>
    </div>
  );
};

export default PriceItem;
