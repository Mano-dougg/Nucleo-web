import { createContext } from "react";

type ResponsiveContextType = {
  isMobile: boolean;
};

const ResponsiveContext = createContext({} as ResponsiveContextType);

export default ResponsiveContext;
