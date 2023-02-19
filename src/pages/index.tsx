import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dự án tra cứu Lịch sử Việt Nam</title>
        <meta name="description" content="Giúp cho các bạn dễ dàng tra cứu lịch sử, đưa
                thông tin chính xác, không xuyên tạc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{backgroundImage:"url('nen.jpg')",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"}} className="flex min-h-screen justify-center items-center">
        <div className="text-center max-w-2xl backdrop-blur-md bg-white/50 p-5 rounded-lg overflow-hidden">
          <h1 className=" font-bold text-3xl mb-2">
            Dự án tra cứu Lịch sử Việt Nam
          </h1>
          <p>
            <i>Đây là dự án dành cho cộng đồng đang được phát triển</i>
          </p>
          <br />
          <ul className="text-left">
            <li>
              {" "}
              <p>
                <b>Mục đích:</b> Giúp cho các bạn dễ dàng tra cứu Lịch sử, đưa
                thông tin chính xác, không xuyên tạc.{" "}
              </p>
            </li>
            <li>
              <p>
                <b>Ý tưởng: </b>
                Mong muốn tạo ra 1 website có giao diện dễ dùng, phủ hợp với mọi người, có mục lục các mốc thời gian theo các triều đại, các bạn cũng có thể đóng góp thông tin để các nội dung được xác thực và đáng tin cậy nhất.
              </p>
            </li>
            <li className="mt-4">
              <p>
                <b>Công nghệ sử dụng để phát triển: </b>
                NextJS, TypeScript, TailwindCSS, Java Spring Boot, MySQL
              </p>
            </li>
            <li className="mt-4 text-center">
               Liên hệ với <a className=" underline" href="http://dducnv.dev/">Nguyễn Văn Đức</a>, chúng ta cùng phát triển ❤️. <br/>(Đóng góp sức lực, dự án không nhằm mục đích kiếm lợi nhuận quảng cáo)<br/>
               <i>19/02/2023</i>
            </li>
          </ul>
          <p></p>
        </div>
      </div>
    </>
  );
}
