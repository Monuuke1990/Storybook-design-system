import React from 'react';

import Button from '../component/Button';
import '../styles.css'
import '../story.css'


export default {
  title: 'ButtonGroup',
  component: Button,
};

export const All = () =><div className="buttonGroup commonbox"><Button variant = "primary"> Primary</Button>
<Button variant = "sm-primary">Small Primary</Button>
<Button variant = "primary-disabled">primary Disabled</Button>
<Button variant = "secondary">secondary</Button><Button variant = "sm-secondary">Small Secondary</Button><Button variant = "secondary-disabled">Secondary Disabled</Button>
<Button variant = "danger">danger</Button><Button variant = "sm-danger">Small Danger</Button>
<Button variant = "primary-wide">Sign up </Button>
<Button variant = "secondary-wide">More news</Button>
<Button variant = "danger-wide">Delete</Button> 

</div> ;
export const ALLSocialButton = () =><div className="buttonGroup"><Button variant = "btn-facebook"><i class="fa fa-facebook-official"></i> Follow</Button>
<Button variant = "btn-twitter"><i class="fa fa-twitter"></i> Follow</Button>
<Button variant = "btn-pintrest"><i class="fa fa-pinterest-p"></i> Follow</Button>
<Button variant = "btn-linkdin"><i class="fa fa-linkedin"></i> Follow</Button>
<Button variant = "btn-mail"><i class="fa fa-envelope-o"></i> Follow</Button></div>

export const BtnPrimary = () => <Button variant = "primary">Hello Button</Button>;
export const BtnSmallPrimary = () => <Button variant = "sm-primary">Small Primary</Button>;
export const BtnPrimaryDisabled = () => <Button variant = "primary-disabled">Primary Disabled</Button>;
export const BtnSecondary = () => <Button variant = "secondary">Secondary</Button>;

export const BtnSmallSecondary = () => <Button variant = "sm-secondary">Small Secondary</Button>;
export const BtnSecondaryDisabled = () => <Button variant = "secondary-disabled">Secondary Disabled</Button>;
export const BtnDanger = () => <Button variant = "danger">Danger</Button>;
export const BtnSmallDanger = () => <Button variant = "sm-danger">Small Danger</Button>;
export const PrimaryWide = () => <Button variant = "primary-wide">Sign up</Button>;
export const SecondaryWide = () => <Button variant = "secondary-wide">More news</Button>;
export const DangerWide = () => <Button variant = "danger-wide">Delete</Button>;

export const facebook = () => <Button variant = "btn-facebook"><i class="fa fa-facebook-official"></i> Follow</Button>;
export const Twitter = () => <Button variant = "btn-twitter"><i class="fa fa-twitter"></i> Follow</Button>;
export const pintrest = () => <Button variant = "btn-pintrest"><i class="fa fa-pinterest-p"></i> Follow</Button>;
export const Mail = () => <Button variant = "btn-linkdin"><i class="fa fa-linkedin"></i> Follow</Button>;
export const linkedin = () => <Button variant = "btn-mail"><i class="fa fa-envelope-o"></i> Follow</Button>;