import Link from 'next/link';

function LinkToSignUpPage() {
  return (
    <div>
      <p className="flex gap-1">
        Are you an alumnus?
        <Link href={'/signup'} className=" text-primary underline">
          Register here.
        </Link>
      </p>
    </div>
  );
}

export default LinkToSignUpPage;
