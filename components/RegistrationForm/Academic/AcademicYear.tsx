const currentYear = new Date().getFullYear();
const startingYear = 1903;

function AcademicYear() {
  return (
    <fieldset className="flex-row">
      <div className="w-1/2">
        <label htmlFor="">Year Started</label>
        <input type="number" min={startingYear} max={currentYear} required />
      </div>

      <div className="w-1/2">
        <label htmlFor="">Year Graduated</label>
        <input type="number" min={startingYear} max={currentYear} required />
      </div>
    </fieldset>
  );
}

export default AcademicYear;
