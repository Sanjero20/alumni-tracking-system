import { useState, useEffect } from 'react';
import { useBirthdayStore } from '@/stores/registration/personal/birthday';
import { getMonths, getDaysOfMonth, getPast100Years } from '@/utils/date';

const months = getMonths();
const initialDays = getDaysOfMonth();
const years = getPast100Years();

function Birthday() {
  const { birthday, handleBirthday } = useBirthdayStore();
  const [days, setDays] = useState<number[]>(initialDays);

  useEffect(() => {
    const { month, year } = birthday;
    const daysOfSelectedMonth = getDaysOfMonth(year, month);
    setDays(daysOfSelectedMonth);
  }, [birthday]);

  return (
    <div>
      <label>Date of Birth</label>
      <div className="flex gap-3">
        {/* Month */}
        <select
          name="month"
          value={birthday.month}
          onChange={(e) => handleBirthday(e)}
        >
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={month} value={index + 1}>
              {month}
            </option>
          ))}
        </select>

        {/* Day */}
        <select
          name="day"
          value={birthday.day}
          onChange={(e) => handleBirthday(e)}
        >
          <option value="">Select Day</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>

        {/* Year */}
        <select
          name="year"
          value={birthday.year}
          onChange={(e) => handleBirthday(e)}
        >
          <option value="">Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Birthday;
