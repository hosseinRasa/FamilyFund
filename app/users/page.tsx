"use client";
import { CloseCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UsersModal() {
  const router = useRouter();

  return (
    <div onClick={() => router.back()} className="modal-backdrop">
      <div onClick={(e) => e.stopPropagation()} className="modal-sheet ">
        <header className="flex flex-row justify-between border-b-2-white ">
          {/* <p className="absolute top-10 right-5">کاربران</p> */}
            <CloseCircleFilled  onClick={() => router.back()} className="absolute top-20 left-2"/>
        </header>
        <Link href="/users/1">مشاهده کاربر ۱</Link>

        <ul>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              iure, aspernatur esse possimus ea placeat molestiae labore iusto
              nihil maxime quis alias eum cupiditate dolorum, dolorem qui
              veniam. Libero, in?
            </div>
            <div>
              Amet nihil ea, sit laudantium suscipit hic quas beatae nisi totam,
              voluptas ex assumenda et! Ipsam perferendis molestias adipisci,
              deleniti in aliquam ex vero eum voluptatum, aperiam sit unde.
              Nesciunt.
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, quae. Ut praesentium laudantium, aperiam excepturi
              maxime debitis voluptatum nulla culpa. Ullam ea veritatis
              laudantium, blanditiis officiis quas sint nihil itaque.
            </div>
            <div>
              Magni error natus a eaque quisquam sit molestiae corrupti
              aspernatur voluptas officiis. Soluta, nostrum eum, quia facere
              eligendi esse incidunt, quis quo inventore temporibus deserunt
              quidem. Praesentium soluta quo error.
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
              ipsum reprehenderit culpa eos doloremque earum laborum
              necessitatibus esse expedita temporibus aliquid animi amet ipsam
              ipsa, itaque sapiente reiciendis impedit vel?
            </div>
            <div>
              Qui accusantium quisquam possimus a perspiciatis hic ab.
              Consequuntur in nulla tempore ullam. Reiciendis, animi officia
              unde iure doloribus quo repellendus maxime, aspernatur vero
              deserunt, asperiores dignissimos quos possimus saepe.
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              asperiores sed earum dolor possimus exercitationem culpa nobis
              aspernatur itaque. Quas, natus facilis! Aspernatur neque, omnis
              voluptatem optio atque aut quidem.
            </div>
            <div>
              Aspernatur omnis voluptate facilis officiis voluptatem aliquam
              distinctio, ab illum obcaecati qui deleniti nulla repellat
              molestiae animi a veniam temporibus culpa porro. Eos praesentium
              quibusdam nisi hic repudiandae est deleniti.
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              dignissimos tenetur consequatur et voluptas quasi tempora impedit!
              Laudantium incidunt voluptas doloremque maiores, possimus debitis
              dolor. Assumenda in fugit et velit.
            </div>
            <div>
              Minus inventore dignissimos illo eaque ullam nihil perspiciatis
              fuga unde nemo dolores! At ullam enim voluptas, consequuntur quam
              consequatur hic, quod distinctio eaque pariatur corrupti quas
              laudantium asperiores odit numquam!
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              accusantium dolorum nemo vel tempora quisquam quae numquam cum
              quaerat eum earum tempore, natus ab et iure iste esse quasi
              deleniti?
            </div>
            <div>
              Obcaecati porro eligendi quis, nesciunt ex quibusdam maiores
              impedit magni reprehenderit nostrum praesentium, atque vero fuga
              mollitia excepturi quam, voluptas voluptatum cupiditate! Corrupti
              velit quo omnis at! Corrupti, ullam blanditiis?
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam
              magni exercitationem aperiam unde illum corrupti nam at quibusdam!
              Ipsa accusantium corporis vitae voluptatibus perferendis
              distinctio amet tenetur. Quasi, vero?
            </div>
            <div>
              Ullam vel iusto maxime, ipsam eius illum perspiciatis at nulla
              odio pariatur fuga natus totam fugiat asperiores neque corrupti
              architecto mollitia numquam tempora qui aliquam? Nam, ipsa
              voluptas? Distinctio, quos.
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              dolores alias. Magnam minima dignissimos cumque voluptate officia,
              dicta maiores modi porro laborum earum sequi eius, ipsum, quis cum
              quod. Facilis!
            </div>
            <div>
              Placeat, unde? Soluta labore voluptatum eius esse quam vero,
              praesentium sit incidunt aut amet exercitationem corporis quaerat
              quod, et ipsam possimus voluptas sed. Cupiditate id suscipit, sunt
              amet esse quis?
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perferendis obcaecati fugiat officia debitis sunt quidem aliquid
              corrupti facere aut eum! Unde repudiandae tenetur dolorem! Nihil
              commodi id totam dolorem quas?
            </div>
            <div>
              Dignissimos exercitationem reprehenderit dolorum vero quaerat sint
              molestiae ducimus! Assumenda modi perferendis dolor rerum amet
              doloremque! Iusto iste, non nobis asperiores eum expedita aliquam
              eaque ratione harum sunt, dolore a.
            </div>
          </li>
          <li>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              asperiores, porro aut minima dicta fuga voluptates enim facere
              autem, eius et. Expedita explicabo adipisci molestiae hic illo
              provident recusandae debitis!
            </div>
            <div>
              Tempore fuga in saepe tenetur omnis explicabo assumenda autem unde
              nemo labore aperiam dolor placeat, exercitationem impedit aliquam
              et ad sed ab illum aut. Dolorum quia qui veritatis porro ab?
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
