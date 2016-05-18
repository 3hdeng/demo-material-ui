import React from 'react';
import IconButton from 'material-ui/IconButton';
//import classnames from 'classnames';
 /* <style>
             .muidocs-icon-custom-github:before {
                              content: "\e625";
                                       }
                                               </style>*/


const IconButtonExampleSimple = () => (
        <div>
       <IconButton iconClassName="muidocs-icon-custom-github" />
        <IconButton iconClassName="muidocs-icon-custom-github" disabled={true} />
        </div>
        );

export default IconButtonExampleSimple;
