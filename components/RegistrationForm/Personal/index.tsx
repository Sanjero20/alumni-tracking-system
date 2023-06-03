import Name from './Name';
import Birthday from './Birthday';

function PersonalInfo() {
  return (
    <fieldset>
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <Name />
      <Birthday />
    </fieldset>
  );
}

export default PersonalInfo;
