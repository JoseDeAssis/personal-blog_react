import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function defaultPage() {
  return (
    <main>
      <Banner />
      <Outlet />
    </main>
  );
}