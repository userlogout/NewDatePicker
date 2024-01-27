import React, { useState, FC } from "react";
import styles from "./DatePickerDropDown.module.scss";

const DatePickerDropdown: FC = () => {
  // Состояние для управления видимостью выпадающего окна
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения видимости выпадающего окна
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.calendarIcon} onClick={toggleDropdown}>
        📅
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.quickSelect}>
            <button>Last</button>
            <input type="number" min="1" />
            <select>
              <option value="minutes">Minutes</option>
              <option value="hours">Hours</option>
              {/*  дополнительные опции */}
            </select>
            <button>Apply</button>
          </div>
          <div className={styles.refreshEvery}>
            <input type="number" min="0" />
            <select>
              <option value="seconds">Seconds</option>
              {/* дополнительные опции */}
            </select>
            <button>Start</button>
          </div>
        </div>
      )}
    </>
  );
};

export default DatePickerDropdown;
