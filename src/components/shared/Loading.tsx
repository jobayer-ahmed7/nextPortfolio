import { DotLoader } from "react-spinners";

interface LoadingProps {
    height?: string;
    width?: string;
}

const Loading = ({height = "h-full", width= "w-full"}: LoadingProps) => {

  return (
    <div className={`${height} ${width} flex items-center justify-center`}>

      <DotLoader color={'#D4AF37'} size={100} />
    </div>
  );
};

export default Loading;
