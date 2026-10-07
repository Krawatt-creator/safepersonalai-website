import IPhoneView, { iphoneMetadata } from "@/views/IPhoneView";
import { en } from "@/i18n/dictionaries/en";
import { enPages } from "@/i18n/pages/en";

export const metadata = iphoneMetadata("en", enPages);

export default function IPhonePage() {
  return <IPhoneView lang="en" dict={en} pages={enPages} />;
}
