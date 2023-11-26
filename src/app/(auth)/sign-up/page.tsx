import SignUp from "@/components/SignUp";

function SingUpPage() {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <SignUp />
        </div>
      </div>
    </>
  );
}

export default SingUpPage;
