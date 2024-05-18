import { createContext } from "react";

type ResponsiveContextType = {
  isMobile: boolean;
  mobileClassName: "mobile" | "";
};

const ResponsiveContext = createContext({} as ResponsiveContextType);

export default ResponsiveContext;
