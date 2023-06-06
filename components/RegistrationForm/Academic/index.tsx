import School from './School';

const currentYear = new Date().getFullYear();
const startingYear = 1903;

function AcademicInfo() {
  return (
    <div>
      <h1 className="title">Academic Information</h1>

      <div className="flex flex-col gap-1">
        <School />

        <fieldset>
          <fieldset className="flex-row">
            <div className="w-1/2">
              <label htmlFor="">Year Started</label>
              <input
                type="number"
                min={startingYear}
                max={currentYear}
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="">Year Graduated</label>
              <input
                type="number"
                min={startingYear}
                max={currentYear}
                required
              />
            </div>
          </fieldset>

          <fieldset className="flex-row">
            <div className="w-1/2">
              <label htmlFor="">SR-CODE</label>
              <input type="text" required />
            </div>

            <div className="w-1/2">
              <label htmlFor="">BSU Mail[@g.batstate-u.edu.ph]</label>
              <input type="email" required />
            </div>
          </fieldset>
        </fieldset>
      </div>
    </div>
  );
}

export default AcademicInfo;
