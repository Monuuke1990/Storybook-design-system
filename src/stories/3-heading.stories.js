import React from 'react';
import Heading from '../component/Example';
import '../styles.css'
import '../story.css'


export default {
  title: 'Headings',
  component: Heading,
};
export const HeadingAll = () =><div className="commonbox">
<Heading variant = "display-1">BuzzFeed is the social news and entertainment company.</Heading><hr/>
<Heading variant = "display-2">BuzzFeed is the social news and entertainment company.</Heading><hr/>
<Heading variant = "display-3">BuzzFeed is the social news and entertainment company.</Heading><hr/>
<Heading variant = "display-4">BuzzFeed is the social news and entertainment company.</Heading><hr/>
<Heading variant = "display-5">BuzzFeed is the social news and entertainment company.</Heading><hr/>
<Heading variant = "display-6">BuzzFeed is the social news and entertainment company.</Heading><hr/>
</div>
export const Heading1 = () => <Heading variant = "display-1">BuzzFeed is the social news and entertainment company.</Heading>;
export const Heading2 = () => <Heading variant = "display-2">BuzzFeed is the social news and entertainment company.</Heading>;
export const Heading3 = () => <Heading variant = "display-3">BuzzFeed is the social news and entertainment company.</Heading>;
export const Heading4 = () => <Heading variant = "display-4">BuzzFeed is the social news and entertainment company.</Heading>;
export const Heading5 = () => <Heading variant = "display-5">BuzzFeed is the social news and entertainment company.</Heading>;
export const Heading6 = () => <Heading variant = "display-6">BuzzFeed is the social news and entertainment company.</Heading>;