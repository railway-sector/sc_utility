import { createContext } from "react";

type MyDropdownContextType = {
  contractcps: any;
  companies: any;
  ptLinetypes: any;
  updateContractcps: any;
  updateCompanies: any;
  updateTypes: any;
};

const initialState = {
  contractcps: undefined,
  companies: undefined,
  ptLinetypes: undefined,
  updateContractcps: undefined,
  updateCompanies: undefined,
  updateTypes: undefined,
};

export const MyContext = createContext<MyDropdownContextType>({
  ...initialState,
});
