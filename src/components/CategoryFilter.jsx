const FILTERS = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

const CategoryFilter = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {/* TODO: render one button per FILTERS entry.
          - Each button calls onFilterChange(f) on click.
          - The active button should look different from the others
            (e.g., "btn-primary" for active, "btn-outline" otherwise).
          - Don't forget the `key` prop! */}
      <button className = {`btn ${activeFilter === "all" ? "btn-primary" : "btn-ghost"
      }`}
      onClick={() => onFilterChange("all")}>All</button>

      <button className = {`btn ${activeFilter === "Breakfast" ? "btn-primary" : "btn-ghost"
      }`}
      onClick={() => onFilterChange("Breakfast")}>Breakfast</button>

      <button className = {`btn ${activeFilter === "Lunch" ? "btn-primary" : "btn-ghost"
      }`}
      onClick={() => onFilterChange("Lunch")}>Lunch</button>

      <button className = {`btn ${activeFilter === "Dinner" ? "btn-primary" : "btn-ghost"
      }`}
      onClick={() => onFilterChange("Dinner")}>Dinner</button>

      <button className = {`btn ${activeFilter === "Dessert" ? "btn-primary" : "btn-ghost"
      }`}
      onClick={() => onFilterChange("Dessert")}>Dessert</button>
    </div>
  );
};

export default CategoryFilter;
