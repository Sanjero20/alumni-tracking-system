export function getMonths() {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}

export function getDaysOfMonth(year: string = '', month: string = '') {
  if (!year && !month) {
    year = '2023';
    month = '1';
  }

  if (year === '') {
    year = '2023';
  }

  if (month === '') {
    month = '1';
  }

  // Convert to a number
  const numYear = parseInt(year);
  const numMonth = parseInt(month);

  const arrayOfDays: number[] = [];
  const numDays = new Date(numYear, numMonth, 0).getDate();
  for (let day = 1; day <= numDays; day++) {
    arrayOfDays.push(day);
  }

  return arrayOfDays;
}

export function getPast100Years() {
  const currentYear = new Date().getFullYear();
  const startingYear = currentYear - 100;

  const arrayOfYears: number[] = [];
  for (let year = currentYear; year >= startingYear; year--) {
    arrayOfYears.push(year);
  }

  return arrayOfYears;
}
