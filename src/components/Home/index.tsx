import React from "react";
import Topbar from "../Topbar";
import { useFetchSession } from "@/hooks/useSession";
import styles from "./Home.module.scss";

export default function HomeComponent() {
  const { session } = useFetchSession();

  return (
    <div>
      <Topbar/>
    </div>
  );
}
