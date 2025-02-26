import Image from "next/image";


export default function Home() {

  return (
    
    <div>
      <Image src={"logo.svg"} height={ 32 } width={ 32 } alt="Logo" fetchPriority='high' />
      <p className="text-xl font-semibold tracking-tight">
    MyTube
      </p>
    </div>
  );
}
