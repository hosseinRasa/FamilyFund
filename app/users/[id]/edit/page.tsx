import SubPage from "@/components/client-side/sub-page";
import { use } from "react";

export default function Edit({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // unwrap the Promise

  return (
    <SubPage title="ویرایش کاربر" navigationButtons={['save']} baseUrl="users" id={id}>

    <h2>کاربر شماره {id}</h2>
        <p>این یک مودال نمونه است.</p>
    </SubPage>  
      
  );
}