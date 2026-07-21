"use client";
import ItemCard from "@/components/client-side/item-card";
import SubPage from "@/components/client-side/sub-page";
 
export default function List() {
  return (
    <SubPage title="لیست موسسه" showSearch navigationButtons={['add']} baseUrl="organizations" id="">
      
      {/*<Button>
        <Link href="/users/1/edit">ویرایش کاربر ۱</Link>
      </Button>
      <Button>
        <Link href="/users/1/delete">حذف کاربر ۱</Link>
      </Button>
 */}

      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
              <p>سن : 57 سال</p>
              <p>نقش : ادمین</p>
            </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="organizations">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
    </SubPage>
  );
}
