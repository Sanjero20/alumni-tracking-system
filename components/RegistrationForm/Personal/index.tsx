import Name from './Name';
import Birthday from './Birthday';

function PersonalInfo() {
  return (
    <div>
      <h1 className="title">Personal Information</h1>
      <fieldset>
        <Name />
        <Birthday />
      </fieldset>
    </div>
  );
}

export default PersonalInfo;
