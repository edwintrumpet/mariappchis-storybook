import React from 'react';
import Header from './Header';
import {storiesOf} from '@storybook/react-native';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import themes from '../../mocks/themes';

storiesOf('Header', Header)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Header
      colors={select('Theme', themes, themes.light)}
      title={text('Title', 'Título')}
    />
  ));
