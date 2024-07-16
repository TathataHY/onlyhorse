import { getUserProfileAction } from "@/app/update-profile/actions";
import BaseLayout from "@/components/base-layout";
import prisma from "@/lib/db";
import { notFound } from "next/navigation";
import Posts from "./posts";
import UserProfile from "./user-profile";

const HomeScreen = async () => {
  const admin = await prisma.user.findUnique({
    where: { email: process.env.ADMIN_EMAIL },
  });
  const user = await getUserProfileAction();

  if (!user) return notFound();

  return (
    <BaseLayout>
      <UserProfile />
      <Posts admin={admin!} isSubscribed={user?.isSubscribed} />
    </BaseLayout>
  );
};
export default HomeScreen;
