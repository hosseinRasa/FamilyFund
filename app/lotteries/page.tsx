"use client";
import ItemCard from "@/components/client-side/item-card";
import SubPage from "@/components/client-side/sub-page";

export default function List() {
  return (
    <SubPage
      title="لیست قرعه کشی"
      showSearch
      navigationButtons={["add"]}
      baseUrl="lotteries"
      id=""
    >
      {/*<Button>
        <Link href="/users/1/edit">ویرایش قرعه کشی ۱</Link>
      </Button>
      <Button>
        <Link href="/users/1/delete">حذف قرعه کشی ۱</Link>
      </Button>
 */}

      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
              <p>سن : 57 سال</p>
              <p>نقش : ادمین</p>
            </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
      <ItemCard id={1} title={"احمد حسنی"}baseUrl="lotteries">
        <p>سن : 57 سال</p>
        <p>نقش : ادمین</p>
      </ItemCard>
    </SubPage>
  );
}
