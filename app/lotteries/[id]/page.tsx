import SubPage from "@/components/client-side/sub-page";
import { use } from "react";

export default function View({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // unwrap the Promise

  return (
    <SubPage title="اطلاعات قرعه کشی" navigationButtons={['edit', 'delete']} baseUrl="lotteries" id={id}>
      <h2>قرعه کشی شماره {id}</h2>
      <p>این یک مودال نمونه است.</p>
    </SubPage>
  );
}
