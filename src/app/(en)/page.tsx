import HomeView, { homeMetadata } from "@/views/HomeView";
import { en } from "@/i18n/dictionaries/en";

export const metadata = homeMetadata("en", en);

export default function Home() {
  return <HomeView lang="en" dict={en} />;
}
