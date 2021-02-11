import { createContext } from 'react';

import SECTIONS_DATA from './directory-sections.data';

const DirectorySectionsContext = createContext(SECTIONS_DATA);

export default DirectorySectionsContext;