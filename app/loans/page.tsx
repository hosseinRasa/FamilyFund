"use client";
import ItemCard from "@/components/client-side/item-card";
import SubPage from "@/components/client-side/sub-page";

export default function List() {
  return (
    <SubPage
      title="لیست وام"
      showSearch
      navigationButtons={["add"]}
      baseUrl="loans"
      id=""
    >
      {/*<Button>
        <Link href="/users/1/edit">ویرایش کاربر ۱</Link>
      </Button>
      <Button>
        <Link href="/users/1/delete">حذف کاربر ۱</Link>
      </Button>
 */}

      <ItemCard id={1} title={"احمد حسنی"} baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="loans">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
    </SubPage>
  );
}
