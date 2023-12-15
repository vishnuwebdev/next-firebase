import { ReactNode } from "react";

const ContainerCard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <div className="w-3/4 rounded-md bg-white/30 shadow-lg flex justify-between flex-col">
        {children}
      </div>
    </div>
  );
};

export default ContainerCard;
