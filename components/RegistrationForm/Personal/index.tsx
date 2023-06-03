import Name from './Name';
import Birthday from './Birthday';

function PersonalSection() {
  return (
    <>
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <Name />
      <Birthday />
    </>
  );
}

export default PersonalSection;
