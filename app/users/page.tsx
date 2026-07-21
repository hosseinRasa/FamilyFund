"use client";
import ItemCard from "@/components/client-side/item-card";
import SubPage from "@/components/client-side/sub-page";
 
export default function UsersModal() {
  return (
    <SubPage title="لیست کاربر" showSearch navigationButtons={['add']} baseUrl="users" id="">
      
      {/*<Button>
        <Link href="/users/1/edit">ویرایش کاربر ۱</Link>
      </Button>
      <Button>
        <Link href="/users/1/delete">حذف کاربر ۱</Link>
      </Button>
 */}

      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}>
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
    </SubPage>
  );
}
