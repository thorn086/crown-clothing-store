import "./category-item.style.scss";

const CategoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="category-image"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover",
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryItem;
