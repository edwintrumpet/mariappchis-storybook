import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {withKnobs, text, select, array} from '@storybook/addon-knobs';
import themes from '../../mocks/themes';
import state from '../../mocks/state';
import data from '../../mocks/menu';

import Menu from './Menu';

storiesOf('Menu', Menu)
  .addDecorator(
    withKnobs({
      escapeHTML: false,
    }),
  )
  .add('default', () => (
    <Menu
      colors={select('Theme', themes, themes.light)}
      image={text('Image', state.profile.image)}
      name={text('Name', state.profile.name)}
      data={array('Menu', data)}
    />
  ));
