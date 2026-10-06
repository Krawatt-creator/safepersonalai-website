import WealthView, { wealthMetadata } from "@/views/WealthView";
import { en } from "@/i18n/dictionaries/en";

export const metadata = wealthMetadata("en", en);

export default function WealthPage() {
  return <WealthView lang="en" dict={en} />;
}
