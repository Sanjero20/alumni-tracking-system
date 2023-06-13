import { useAcademicYearStore } from '@/stores/registration/academic/year';

const currentYear = new Date().getFullYear();
const startingYear = 1903;

function AcademicYear() {
  const { acadYear, handleAcademicYear } = useAcademicYearStore();

  return (
    <fieldset className="flex-row">
      <div className="w-1/2">
        <label htmlFor="year-start">Year Started</label>
        <input
          type="number"
          id="year-start"
          name="yearStarted"
          min={startingYear}
          max={currentYear}
          value={acadYear.yearStarted}
          onChange={(e) => handleAcademicYear(e)}
          required
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="year-end">Year Graduated</label>
        <input
          type="number"
          id="year-end"
          name="yearGraduated"
          min={startingYear}
          max={currentYear}
          value={acadYear.yearGraduated}
          onChange={(e) => handleAcademicYear(e)}
          required
        />
      </div>
    </fieldset>
  );
}

export default AcademicYear;
