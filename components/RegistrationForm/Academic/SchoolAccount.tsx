import { useAcademicAccountStore } from '@/stores/registration/academic/account';

function SchoolAccount() {
  const { account, handleAcademicAccount } = useAcademicAccountStore();

  return (
    <fieldset className="flex-row">
      <div className="w-1/2">
        <label htmlFor="sr-code">SR-CODE [YY-DDDDD]</label>
        <input
          type="text"
          id="sr-code"
          name="srCode"
          value={account.srCode}
          onChange={(e) => handleAcademicAccount(e)}
          required
        />
      </div>

      <div className="w-1/2">
        <label htmlFor="bsu-email">BSU Mail[@g.batstate-u.edu.ph]</label>
        <input
          type="email"
          id="bsu-email"
          name="bsuEmail"
          value={account.bsuEmail}
          onChange={(e) => handleAcademicAccount(e)}
          required
        />
      </div>
    </fieldset>
  );
}

export default SchoolAccount;
