import React, { useState, useEffect } from "react";

const availableSizes = ["XS", "S", "M", "L"];

const ProductFilter = ({ onFilterChange }) => {
  const [selectedSizes, setSelectedSizes] = useState([]);

  // Обработка изменения размера
  const handleSizeChange = (size) => {
    setSelectedSizes(
      (prevSelectedSizes) =>
        prevSelectedSizes.includes(size)
          ? prevSelectedSizes.filter((s) => s !== size) // Удалить размер из выбранных
          : [...prevSelectedSizes, size] // Добавить размер в выбранные
    );
  };

  // Эффект, вызывающий обновление фильтра при изменении selectedSizes
  useEffect(() => {
    onFilterChange(selectedSizes); // Обновление фильтра в родительском компоненте
  }, [selectedSizes, onFilterChange]);
  return (
    <div>
      {availableSizes.map((size) => (
        <div className="sort__check" key={size}>
          <label for="sort__check1">
            <input
              id="sort__check1"
              type="checkbox"
              checked={selectedSizes.includes(size)}
              onChange={() => {
                handleSizeChange(size);
                // handleFilterChange(); // Обновить фильтр при изменении
              }}
            />
            {size}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProductFilter;
