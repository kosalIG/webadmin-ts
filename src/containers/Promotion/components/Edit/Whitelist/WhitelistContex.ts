import React from 'react';

const WhitelistContext = React.createContext({} as any);
const useWhitelistConsummer = (): any => React.useContext(WhitelistContext);
export { WhitelistContext, useWhitelistConsummer };
