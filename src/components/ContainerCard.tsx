import { ReactNode } from "react";

const ContainerCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen max:h-screen-auto flex justify-center py-10 bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <div className=" w-4/5 rounded-md bg-white/30 shadow-lg flex justify-start flex-col">
        {children}
      </div>
    </div>
  );
};

export default ContainerCard;
