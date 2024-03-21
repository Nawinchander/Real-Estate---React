// import React from 'react'
import {
    Accordion, 
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accesible-accordion';
import 'react-accesible-accordion/dist/fancy-example.css';
import'./Value.css';
import {mdOutlineArrowDropDown} from "react-icon/md";
import data from '../../utils/accordion';
import { useState } from 'react';

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">

            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>

            <div className="v-right flexColStart">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give to You</span>
                <span className='secondaryText'>We always ready to help by providijng the best services for you.
                <br />
                We beleive a good blace to live can make your life better</span>

                <Accordion 
                className = "accordion"
                allowMultipleExpanded = {false}
                preExpanded = {[0]}>
                    {
                        data.map((item, i) => {
                            const [className, setClassName] = useState(null);
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='accordionButton flexCenter'>
                                                                                      
                                           <AccordionItemState>
                                            {({expanded}) => expanded 
                                            ? setClassName ("expanded"): 
                                              setClassName("collapsed") 
                                              }
                                            </AccordionItemState> 
                                           <div className="flexCenter icon">
                                                {item.icon}</div>
                                                <span className="primaryText">
                                                    {item.heading}
                                                </span>
                                                <div className="flexCenter icon">
                                                    <mdOutlineArrowDropDown size={20}></mdOutlineArrowDropDown>
                                                </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel >
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            )
                        })}

                </Accordion>

            </div>
            


        </div>
    </section>
  )
}

export default Value