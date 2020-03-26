import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';

export default {
  title: 'Design System',
  component: Welcome,
};

//export const ToStorybook = () => <Welcome showApp={linkTo('Button')} />;
export const ToStorybook = () => <div className="welcomeMessage commonbox">
<h1>Design System</h1>

<p>A Design System is the single source of truth which groups all the elements that will allow the teams to 
  design, realize and develop a product.
  
  
Design systems are essentially collections of rules, constraints, and principles, implemented in design and code. These 3 attributes serve distinct functions and provide coherent, systemic order in systems from buttons to single page applications.
<br></br>
1.Rule: must have a visual cue or text to indicate call to action CTA<br></br>
2.Constraint: can only have
3 unique types — primary, secondary, and default.<br></br>
3.Principle: should be used for specific user interaction
  
  
  </p>
</div>;

ToStorybook.story = {
  name: 'Welcome Message',
};
