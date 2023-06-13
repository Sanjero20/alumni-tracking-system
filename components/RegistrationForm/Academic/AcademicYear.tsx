const currentYear = new Date().getFullYear();
const startingYear = 1903;

function AcademicYear() {
  return (
    <fieldset className="flex-row">
      <div className="w-1/2">
        <label htmlFor="year-start">Year Started</label>
        <input
          type="number"
          id="year-start"
          min={startingYear}
          max={currentYear}
          required
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="year-end">Year Graduated</label>
        <input
          type="number"
          id="year-end"
          min={startingYear}
          max={currentYear}
          required
        />
      </div>
    </fieldset>
  );
}

export default AcademicYear;
