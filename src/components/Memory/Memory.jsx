import React from 'react'

const Memory = () => {
    const memoryTarget = [
        "64 ГБ", "128 ГБ", "256 ГБ", "512 ГБ", "1024 ГБ"
    ]
    return (
        <div className='memory__content'>
            <h1 className='memory__logo'>Память:</h1>
            {
                memoryTarget.map(memory => {
                    console.log(memory);
                    return (
                        <div className='memory__flex' key={memory}>
                            <button className='memory__btn'>
                                {memory}
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Memory