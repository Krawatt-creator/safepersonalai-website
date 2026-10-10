import DownloadView, { downloadMetadata } from "@/views/DownloadView";
import { en } from "@/i18n/dictionaries/en";

export const metadata = downloadMetadata("en");

export default function DownloadPage() {
  return <DownloadView lang="en" dict={en} />;
}
