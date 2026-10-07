import BaseView, { baseMetadata } from "@/views/BaseView";
import { en } from "@/i18n/dictionaries/en";
import { enPages } from "@/i18n/pages/en";

export const metadata = baseMetadata("en", enPages);

export default function OperationalPage() {
  return <BaseView lang="en" dict={en} pages={enPages} />;
}
