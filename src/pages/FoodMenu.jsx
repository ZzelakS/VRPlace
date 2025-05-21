import MenuViewer from "../components/menuViewer/MenuViewer";

export default function FoodMenu() {
  return (
    <div className="pt-32">
      <MenuViewer pdfUrl="src/assets/food-menu.pdf" />
    </div>
  );
}
