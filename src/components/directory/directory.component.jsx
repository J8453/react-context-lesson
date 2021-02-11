import React, { useContext } from 'react';

import MenuItem from '../menu-item/menu-item.component';

import DirectorySectionsContext from '../../contexts/directory/directioy-sections.context';

import './directory.styles.scss';

const Directory = () => {
  const sections = useContext(DirectorySectionsContext);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
