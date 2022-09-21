import { useEffect, useState } from "react";

export const Notify = ({
  status,
  message,
  onValidated,
}: {
  status: any;
  message: any;
  onValidated: any;
}) => {
  const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");

  const handleFormSubmit = () => {
    setError("");

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  return (
    <>
      {!message || status === "error" ? (
        <div className="flex flex-col items-center w-full gap-4">
          <p className="font-semibold text-lg">Get notified when we launch</p>
          <div className="flex flex-col md:flex-row w-full max-w-xl items-center gap-4 ">
            <input
              type="text"
              onChange={(event) => setEmail(event?.target?.value ?? "")}
              placeholder="example@example.com"
              className="bg-[#EBEBEB] w-[90%] h-[60px] px-6 mx-4 text-xl rounded-[10px] relative"
            />
            <button
              onClick={handleFormSubmit}
              className="bg-blue w-[50%] px-6 h-[60px] text-xl rounded-[10px] text-white"
            >
              Notify me
            </button>
          </div>
          {error ? <p className="text-red-500">{error}</p> : null}
          {message ? (
            <p className="text-red-500">Enter a valid email address</p>
          ) : null}
        </div>
      ) : (
        <h1 className="text-center">{message}</h1>
      )}
    </>
  );
};
