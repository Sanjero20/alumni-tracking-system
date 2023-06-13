function SchoolAccount() {
  return (
    <fieldset className="flex-row">
      <div className="w-1/2">
        <label htmlFor="sr-code">SR-CODE</label>
        <input type="text" id="sr-code" required />
      </div>

      <div className="w-1/2">
        <label htmlFor="bsu-email">BSU Mail[@g.batstate-u.edu.ph]</label>
        <input type="email" id="bsu-email" required />
      </div>
    </fieldset>
  );
}

export default SchoolAccount;
