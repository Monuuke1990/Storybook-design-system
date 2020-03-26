import React, { Fragment } from 'react';
//import '../App.css';
//import '../index.js';
import { Container, Row, Col, Form } from 'reactstrap';

export default{
    title: 'FormsGroups',
    component:'Forms',
};

export const InputAll = () => <div>
    <Fragment>
            <Container className="PdColorPalette">
            <h4>Text inputs</h4>
            <p>A text input should always have a label. Labels should be written in sentence case and are always placed on top of the input.</p>
                <Row>
                    <Col md="6">
                    <p className="inputTxtHeading" >Default text input with label</p>
                        <label for="lfname">First name:</label><br/>
                        <input id="lfname" name="fname" type="text" />
                        <button className=" btn-add" >Click</button>
                    </Col>
                   
                    <Col md="6">
                    <p className="inputTxtHeading" >With placeholder text</p>
                        <label for="lfname">First name:</label><br/>
                        <input id="lfname" name="fname" type="text" placeholder="Enter your name" />
                        <button className=" btn-add" >Click</button>
                    
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <p className="inputTxtHeading" >Small text input with label</p>
                        <label for="lfname">First name:</label><br/>
                        <input id="lfname" name="fname" className="InputSm" type="text" />
                        <button className=" btn-add btn-sm" >Click</button>
                    </Col>
                   
                    <Col md="6">
                    <p className="inputTxtHeading" >With placeholder text</p>
                        <label for="lfname">First name:</label><br/>
                        <input id="lfname" name="fname" className="InputSm" type="text" placeholder="Enter your name" />
                        <button className=" btn-add btn-sm" >Click</button>
                    
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                    <p className="inputTxtHeading" >Textarea</p>
                        <label for="lfname">Your Comment</label><br/>
                        <textarea rows="4" cols="50" id="lfname" name="fname" className="" type="text" /><br/>
                        <button className=" Submit-btn" >Add Comment</button>
                    </Col>
                   
                    <Col md="6">
                    <p className="inputTxtHeading" >Optional input</p>
                        <label for="lfname">Your Password<span class="required">*</span></label><br/>
                        <input id="password" type="password" />
                         
                    
                    </Col>
                </Row>
            </Container>
        </Fragment>


        <Fragment>
            <Container className="PdColorPalette">
            <h4>Select Menu</h4>
            
                <Row>
                    <Col md="6">
                    <p className="inputTxtHeading">Default Select Menu</p>
                        <select className="ChooseOpt">
                            <option value="Choose one">Choose a Personality</option>
                            <option value="Personality 1">Personality 1</option>
                            <option value="Personality 2">Personality 2</option>
                            <option value="Personality 3">Personality 3</option>
                        </select>
                    </Col>
                    <Col md="6">
                    <p className="inputTxtHeading">Small Select Menu</p>
                    <select>
                        <option value="Choose one">Choose a Personality</option>
                        <option value="Personality 1">Personality 1</option>
                        <option value="Personality 2">Personality 2</option>
                        <option value="Personality 3">Personality 3</option>
                    </select>
                    </Col>
                </Row>
            </Container>
        </Fragment>


 
        <Fragment>
            <Container className="PdColorPalette">
            <h4>Radio buttons & checkboxes</h4>
            
                <Row>
                    <Col md="6">
                        <p className="inputTxtHeading">Radio buttons</p>
                            <label class="container">
                                <input type="radio" name="Option" value="Option1" className="InputBtn" />
                                <span class="checkmark"></span>
                                <span className="CkeckmarkTxt" > Option 1</span><br/>
                            </label>
                            <label class="container">
                                <input type="radio" name="Option" value="Option2" className="InputBtn" />
                                <span class="checkmark"></span>
                                <span className="CkeckmarkTxt" >Option 2</span><br/>
                            </label>
                            <label class="container">
                                <input type="radio" name="Option" value="Option3" className="InputBtn" /> 
                                <span class="checkmark"></span>
                                <span className="CkeckmarkTxt" >Option 3</span><br/>
                            </label> 
                    </Col>
                    <Col md="6">
                        <p className="inputTxtHeading">Small Select Menu</p>
                            <label class="CheckboxContainer">
                                <input type="radio" name="Option" value="Option1" />
                                <span class="checkBoxMark"></span>
                                <span className="CkeckmarkTxt" > Option 1</span><br/>
                            </label>
                            <label class="CheckboxContainer">
                                <input type="radio" name="Option" value="Option2" />
                                <span class="checkBoxMark"></span>
                                <span className="CkeckmarkTxt" >Option 2</span><br/>
                            </label>
                            <label class="CheckboxContainer">
                                <input type="radio" name="Option" value="Option3" /> 
                                <span class="checkBoxMark"></span>
                                <span className="CkeckmarkTxt" >Option 3</span><br/>
                            </label>
                    </Col>
                </Row>
            </Container>
        </Fragment>

        
    <Fragment>
<Container className="PdColorPalette">
<h4>Labels & Messaging</h4>
<p className="HelperTxt"><span>Helper Text</span><br/>Helper text is only placed below the input. It helps gives hints to the user about how to fill out the form. 
    Only use this helper text if you have to!</p>
<div className="LabelsBox">
    <h6>Your username</h6>
    <input type="text" className="inputTxt"/>
    <p className="InputComment">BTW, your username cannot be changed.</p>

</div>


<p className="HelperTxt"><span>Warning message</span><br/>Input label and input border turn orange, and the warning message is placed below the input. </p>
<div className="LabelsBox">
    <h6 className="WarnTxt">Your username</h6>
    <input type="text" className="inputTxt WarnInput"/>
    <p className="InputComment WarnTxt">Caps lock is on!</p>

</div>


<p className="HelperTxt"><span>Error Message</span><br/>Input label and input border turn red, and the error message is placed below the input.</p>
<div className="LabelsBox">
    <h6 className="errTxt">Your username</h6>
    <input type="text" className="inputTxt ErrInput"/>
    <p className="InputComment errTxt">This is an error message about your password.</p>

</div>


<p className="HelperTxt"><span>Success Message</span><br/>Input label and input border turn green, and the success message is placed below the input. It appears once the error is cleared.</p>
<div className="LabelsBox">
    <h6 className="SuccessTxt">Your username</h6>
    <input type="text" className="inputTxt SuccessInput"/>
    <p className="InputComment SuccessTxt">Looks good!</p>

</div>
</Container>
</Fragment>


 
</div>

function Forms(){
    return(<div></div>);
}


// export const Select_Menu = () => <div>
//     <Fragment>
//             <Container className="PdColorPalette">
//             <h4>Select Menu</h4>
            
//                 <Row>
//                     <Col md="6">
//                     <p className="inputTxtHeading">Default Select Menu</p>
//                         <select className="ChooseOpt">
//                             <option value="Choose one">Choose a Personality</option>
//                             <option value="Personality 1">Personality 1</option>
//                             <option value="Personality 2">Personality 2</option>
//                             <option value="Personality 3">Personality 3</option>
//                         </select>
//                     </Col>
//                     <Col md="6">
//                     <p className="inputTxtHeading">Small Select Menu</p>
//                     <select>
//                         <option value="Choose one">Choose a Personality</option>
//                         <option value="Personality 1">Personality 1</option>
//                         <option value="Personality 2">Personality 2</option>
//                         <option value="Personality 3">Personality 3</option>
//                     </select>
//                     </Col>
//                 </Row>
//             </Container>
//         </Fragment>
// </div>

// function SelectMenu(){
//     return(
//         <div></div>
//     );
// }

// export const Radio_buttons_Checkbox = () => <div>

//     <Fragment>
//             <Container className="PdColorPalette">
//             <h4>Radio buttons & checkboxes</h4>
            
//                 <Row>
//                     <Col md="6">
//                         <p className="inputTxtHeading">Radio buttons</p>
//                             <label class="container">
//                                 <input type="radio" name="Option" value="Option1" className="InputBtn" />
//                                 <span class="checkmark"></span>
//                                 <span className="CkeckmarkTxt" > Option 1</span><br/>
//                             </label>
//                             <label class="container">
//                                 <input type="radio" name="Option" value="Option2" className="InputBtn" />
//                                 <span class="checkmark"></span>
//                                 <span className="CkeckmarkTxt" >Option 2</span><br/>
//                             </label>
//                             <label class="container">
//                                 <input type="radio" name="Option" value="Option3" className="InputBtn" /> 
//                                 <span class="checkmark"></span>
//                                 <span className="CkeckmarkTxt" >Option 3</span><br/>
//                             </label> 
//                     </Col>
//                     <Col md="6">
//                         <p className="inputTxtHeading">Small Select Menu</p>
//                             <label class="CheckboxContainer">
//                                 <input type="radio" name="Option" value="Option1" />
//                                 <span class="checkBoxMark"></span>
//                                 <span className="CkeckmarkTxt" > Option 1</span><br/>
//                             </label>
//                             <label class="CheckboxContainer">
//                                 <input type="radio" name="Option" value="Option2" />
//                                 <span class="checkBoxMark"></span>
//                                 <span className="CkeckmarkTxt" >Option 2</span><br/>
//                             </label>
//                             <label class="CheckboxContainer">
//                                 <input type="radio" name="Option" value="Option3" /> 
//                                 <span class="checkBoxMark"></span>
//                                 <span className="CkeckmarkTxt" >Option 3</span><br/>
//                             </label>
//                     </Col>
//                 </Row>
//             </Container>
//         </Fragment>
 
// </div>

// function RadionBtn(){
//     return(<div></div>);
// }
// export const Form_Labels = () => <div>

//     <Fragment>
// <Container className="PdColorPalette">
// <h4>Labels & Messaging</h4>
// <p className="HelperTxt"><span>Helper Text</span><br/>Helper text is only placed below the input. It helps gives hints to the user about how to fill out the form. 
//     Only use this helper text if you have to!</p>
// <div className="LabelsBox">
//     <h6>Your username</h6>
//     <input type="text" className="inputTxt"/>
//     <p className="InputComment">BTW, your username cannot be changed.</p>

// </div>


// <p className="HelperTxt"><span>Warning message</span><br/>Input label and input border turn orange, and the warning message is placed below the input. </p>
// <div className="LabelsBox">
//     <h6 className="WarnTxt">Your username</h6>
//     <input type="text" className="inputTxt WarnInput"/>
//     <p className="InputComment WarnTxt">Caps lock is on!</p>

// </div>


// <p className="HelperTxt"><span>Error Message</span><br/>Input label and input border turn red, and the error message is placed below the input.</p>
// <div className="LabelsBox">
//     <h6 className="errTxt">Your username</h6>
//     <input type="text" className="inputTxt ErrInput"/>
//     <p className="InputComment errTxt">This is an error message about your password.</p>

// </div>


// <p className="HelperTxt"><span>Success Message</span><br/>Input label and input border turn green, and the success message is placed below the input. It appears once the error is cleared.</p>
// <div className="LabelsBox">
//     <h6 className="SuccessTxt">Your username</h6>
//     <input type="text" className="inputTxt SuccessInput"/>
//     <p className="InputComment SuccessTxt">Looks good!</p>

// </div>
// </Container>
// </Fragment>


// </div>
// function Labels(){
//     return(<div></div>)
// }

