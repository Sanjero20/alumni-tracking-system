function SchoolAccount() {
  return (
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
  );
}

export default SchoolAccount;
