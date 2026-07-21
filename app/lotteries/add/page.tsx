import SubPage from "@/components/client-side/sub-page";
import { use } from "react";

export default function Delete({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // unwrap the Promise

  return (
    <SubPage title="افزودن قرعه کشی" navigationButtons={['save']} baseUrl="lotteries" id="">
      <h2>قرعه کشی شماره {id}</h2>
      <p>این یک مودال نمونه است.</p>
    </SubPage>
  );
}
