"use client";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { checkAuthStatus } from "./actions";

export default function CallbackPage() {
  const router = useRouter();
  const { user, isLoading: checkingAuth } = useKindeBrowserClient();
  const { data } = useQuery({
    queryKey: ["authCheck"],
    queryFn: async () => await checkAuthStatus(),
  });

  useEffect(() => {
    // first version before the stripe integration
    // if (data?.success || data?.success === false) {
    // 	router.push("/");
    // }

    const stripeUrl = localStorage.getItem("stripeRedirectUrl");
    if (stripeUrl && user?.email && !checkingAuth) {
      localStorage.removeItem("stripeRedirectUrl");
      window.location.href = stripeUrl + "?prefilled_email=" + user.email;
    } else if (!user && !checkingAuth) {
      router.push("/");
    }
  }, [router, checkingAuth, user]);

  if (!checkingAuth && data?.success) {
    return router.push("/");
  }

  return (
    <div className="mt-20 w-full flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader className="w-10 h-10 animate-spin text-muted-foreground" />
        <h3 className="text-xl font-bold">Redirecting...</h3>
        <p>Please wait...</p>
      </div>
    </div>
  );
}
