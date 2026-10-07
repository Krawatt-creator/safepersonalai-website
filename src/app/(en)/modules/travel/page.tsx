import TravelView, { travelMetadata } from "@/views/TravelView";
import { en } from "@/i18n/dictionaries/en";
import { enPages } from "@/i18n/pages/en";

export const metadata = travelMetadata("en", enPages);

export default function TravelPage() {
  return <TravelView lang="en" dict={en} pages={enPages} />;
}
