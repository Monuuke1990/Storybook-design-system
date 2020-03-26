import React from 'react';
import Badge from '../component/Badge';
import '../styles.css'
import '../story.css'


export default {
  title: 'Badge',
  component: Badge,
};

export const AllBadges = () =><div class="badgeStyle">
<div className="pagesContent">
<span>Badges</span>
Badges scale to match the size of the immediate parent element by using relative font sizing</div>

<Badge variant = "primary">Primary</Badge>
<Badge variant = "secondary">Secondary</Badge> <Badge variant = "success">Success</Badge>
<Badge variant = "info">Info</Badge><Badge variant = "warning">Warning</Badge>
<Badge variant = "light">Light</Badge><Badge variant = "danger">Danger</Badge><Badge variant = "dark">Dark</Badge>
</div>

export const BadgePrimary = () => <Badge variant = "primary">Primary</Badge>;
export const BadgeSecondary = () => <Badge variant = "secondary">Secondary</Badge>;
export const BadgeSuccess = () => <Badge variant = "success">Success</Badge>;
export const Badgeinfo = () => <Badge variant = "info">Info</Badge>;
export const BadgeWarning = () => <Badge variant = "warning">Warning</Badge>;
export const BadgeLight = () => <Badge variant = "light">Light</Badge>;
export const BadgeDanger = () => <Badge variant = "danger">Danger</Badge>;
export const BadgeDark = () => <Badge variant = "dark">Dark</Badge>;

