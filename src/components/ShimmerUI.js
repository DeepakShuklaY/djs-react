const ShimmerUI = () => {
    return (
      <div className="shimmer-body">
        <div className="shimmer-filter">
          <button className="shimmer-filter-btn shimmer"></button>
        </div>
        <div className="shimmer-restaurant-container shimmer">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
        </div>
      </div>
    );
  };

export default ShimmerUI;