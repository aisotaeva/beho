import React from 'react';
import { showToast } from '../../utils/toast';

const ColorFullBtn = () => {

    const colorFullContent =
        ["#FDFDFD", "#FFE0BB", "#FFBBBB", "#BBFFE2", "#BBC2FF", "#FEBBFF"
        ]
    return (
        <div className='color__full__card'>
            <h1 className='color__full__targe'>Цвет:</h1>
            <div className='content__color__card'>
                {colorFullContent.map(content => {
                    return (
                        <div key={content}>
                            <button
                            onClick={() => {
                                showToast("hello world im toast", "success", "dark")
                              }}
                                className='color__full__btn'>
                                <span    className='color__full__content__btn' style={{
                                    background: `${content}`,
                                    color: `${content}`
                                }}>'</span>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ColorFullBtn;
