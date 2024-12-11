"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";

const page = () => {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div className="flex flex-col p-20 ">
      <p>Sign In </p>
      <>
        {providers &&
          Object.values(providers).map((provider) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => {
                signIn(provider.id);
              }}
              className="bg-blue-900 p-10 text-white"
            >
              Sign in
            </button>
          ))}
      </>
    </div>
  );
};

export default page;
