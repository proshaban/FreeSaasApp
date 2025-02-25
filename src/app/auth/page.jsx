"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth() {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, [router]);

  return <h1>Redirecting to Login...</h1>;
}
