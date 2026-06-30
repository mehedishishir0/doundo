import { useSession } from "next-auth/react";
import { useMemo } from "react";

export interface UserProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  imageLink?: string;
  role?: string;
  companyName?: string;
  id?: string;
}

export function useUserProfile() {
  const { data: session, status } = useSession();

  const loading = status === "loading";

  const profile = useMemo<UserProfile | null>(() => {
    if (!session?.user) return null;

    // Split name into first and last name if possible, or use empty strings
    const nameParts = session.user.name?.split(" ") || [];
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    return {
      firstName,
      lastName,
      email: session.user.email || "",
      imageLink: session.user.image || "",
      role: (session.user as { role?: string }).role || "",
      id: (session.user as { id?: string }).id,
      // companyName is not available in the default session
    };
  }, [session]);

  return {
    profile,
    loading,
    isAuthenticated: status === "authenticated",
  };
}
