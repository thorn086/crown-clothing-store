import CategoryItem from "../category-item/category-item.component";
import "./categories-list.style.scss";

const CategoriesList = ({ categories }) => {
  return (
    <div className="categories-container">
      <h1>hello</h1>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
      ;
    </div>
  );
};
export default CategoriesList;
