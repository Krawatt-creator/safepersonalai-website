import AboutView, { aboutMetadata } from "@/views/AboutView";
import { en } from "@/i18n/dictionaries/en";
import { enAbout } from "@/i18n/about/en";

export const metadata = aboutMetadata("en", enAbout);

export default function AboutPage() {
  return <AboutView lang="en" dict={en} about={enAbout} />;
}
