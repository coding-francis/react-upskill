import React from 'react'
import './styles.css'
import { HiMail } from 'react-icons/hi'
import img from '../../assets/images/man.png'

const LandingHero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-desc'>
                <h1><span style={{ fontWeight: 400 }}>You don&apos;t have to</span><br />Fight them Alone.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>

                <div className="cute-form">
                    <div className="input-area">
                        <HiMail size={50} color={'#504e4e80'} />
                        <input type="text" placeholder='Enter your eamil address' />
                    </div>
                    <div className='btn'>
                        <button>Let&apos;s Talk</button>
                    </div>
                </div>
            </div>
            <div className='hero-img'>
                <div className='img-inner'>
                    <img src={img} alt="" width={'100%'} height={'auto'} />
                </div>
            </div>
        </section>
    )
}

export default LandingHero