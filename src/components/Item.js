import { findAllByTitle } from '@testing-library/react'
import React from 'react'
import Button from './Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css'

const Item = ({ title, desc, descLink, backgroundImg, leftBtnText, leftBtnLink, rightBtnTxt, rightBtnLink, twoButtons, first }) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__description">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item__buttons">
                        <Button imp='primary' text={leftBtnLink} link={leftBtnLink} />
                        {twoButtons && (
                            <Button imp='secondary' text={rightBtnTxt} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <ExpandMoreIcon />
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Item;
