import Image from "next/image";
export default function Custom404() {
  return (
    <div className="notFound--wrapper">
      <Image src="/img/404.svg" width="500" height="500" />

      <style jsx>{`
        .notFound--wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
