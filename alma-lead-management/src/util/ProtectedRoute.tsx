"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@store/reduxHook";


const adminRoutes = ["/management"];

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const currentUser = useAppSelector((state) => state?.rootReducer?.user?.currentUser);

  useEffect(() => {
    if (adminRoutes.includes(pathname as string) && currentUser !== "admin") {
      router.push("/");
    }
  }, [pathname, currentUser, router]);

  return <>{children}</>;
}
