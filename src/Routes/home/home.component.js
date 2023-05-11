import CategoriesList from "../../components/categories/categories-list.component";
import categories from "../../Data/categories-data/categoriesData";

const Home = () => {
  return <CategoriesList categories={categories} />;
};

export default Home;
