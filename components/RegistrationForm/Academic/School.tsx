function School() {
  return (
    <fieldset>
      <div className="flex flex-col">
        <label htmlFor="">Campus</label>
        <select name="" id="" required>
          <option value="">Select Campus</option>
        </select>
      </div>

      <div>
        <label htmlFor="">College</label>
        <input type="text" required />
      </div>

      <div>
        <label htmlFor="">Degree/Certification & Major</label>
        <input type="text" required />
      </div>
    </fieldset>
  );
}

export default School;
