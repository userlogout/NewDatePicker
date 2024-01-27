import React, { FC, useState } from "react";
import styles from "./MyDatePicker.module.scss";
import DatePickerDropdown from "../DatePickerDropdown/DatePickerDropDown";

// Определяем компонент MyDatePicker
const MyDatePicker: FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Функция для обработки нажатия на иконку календаря
  const handleCalendarClick = () => {
    // функцию для отображения вашего датапикера
    console.log("Календарь был нажат");
  };

  // Функция для переключения видимости выпадающего окна
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.myDatePicker}>
      <button className={styles.iconButton} onClick={toggleDropdown}>
        📅 {/* Иконка календаря */}
      </button>
      {isDropdownOpen && <DatePickerDropdown />}
      <span>Last 30 minutes</span>
      <button>Show dates</button>
      <button className={styles.primaryButton}>Refresh</button>
    </div>
  );
};

export default MyDatePicker;
