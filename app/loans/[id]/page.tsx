import SubPage from "@/components/client-side/sub-page";
import { use } from "react";

export default function View({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // unwrap the Promise

  return (
    <SubPage title="اطلاعات وام" navigationButtons={['edit', 'delete']} baseUrl="loans" id={id}>
      <h2>وام شماره {id}</h2>
      <p>این یک مودال نمونه است.</p>
    </SubPage>
  );
}
