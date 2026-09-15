import { redirect } from "next/navigation";
import { wordpressAdminUrl } from "../../../lib/wordpress";

export default function WordPressAdminRedirect() {
  redirect(wordpressAdminUrl());
}
