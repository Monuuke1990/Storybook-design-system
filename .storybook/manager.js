import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { addons } from '@storybook/addons';
import myTheme from './myTheme';

addons.setConfig({
  theme: myTheme,
});

addDecorator(
    withInfo({
        header: true,
    })
  ); 