import React from 'react';
import main from './images/main.png';
import Ant from './images/ant.png'; 
import fly from './images/fly.png';
import mosquito from './images/mosquito.png';
import contact from './images/contact.jpg';


function Main() {
  return (
    <div className='main'>
      <div className='main__img'>
        <img src={main} alt='Pest Conrolling Logo' width={'100%'} height={'auto'} />
      </div> 
      <h1 className='main__h1'>We provide Best to our customers!</h1>
      <div className='main__sections'>
            <section className='sec1' id='services'>
                <img src={Ant} alt='Ant' width={'70%'} height={'auto'} />
                <ul>
                    <li><span className='span__list'>A</span>nt Control</li>
                    <li><span className='span__list'>D</span>is-infastation</li>
                    <li><span className='span__list'>R</span>odent Control</li>
                </ul>
            </section>
            <section className='sec2'>
                <img src={fly} alt='fly' width={'50%'} height={'auto'} />
                <ul>
                    <li><span className='span__list'>F</span>ly Control</li>
                    <li><span className='span__list'>T</span>ermite Control</li>
                    <li><span className='span__list'>L</span>izard Control</li>
                </ul>
            </section>
            <section className='sec3'>
                <img src={mosquito} alt='mosquito' width={'70%'} height={'auto'} />
                <ul>
                    <li><span className='span__list'>M</span>osquito Control</li>
                    <li><span className='span__list'>W</span>eed Control</li>
                </ul>
            </section>
      </div> 
      <h1 className='main__h1'>We are providing our services in Andhra Pradesh & Odisha</h1>
      <h2>We are servicing since 1995</h2>
      <h3>We are giving high quality services in low prices....</h3>
      <section className='main__contact'>
        <div className='contact__info'>
          <img src={contact} alt='A man pertilizing the plants' width={'100%'} height={'auto'} />
        </div>
        <h1 className='contact__h1' id='contact'>Contact Us</h1>
        <div className='contact__nav'>
          <h3><a href='#home'>Back To Home</a></h3>
          <h3><a href='#services'>Services</a></h3>
        </div>
        <h3 style={{padding:'1rem'}}>We always here for your safety and we keep your surroundings clean</h3>
        <address className='adrs'>
          <h2>In Andhra Pradesh</h2>
          <p>Santhabommali-village & post</p>
          <p>Tekkali</p>
          <p>Srikakulam</p>
          <p>Andhra Pradesh</p>
          <p>Pin-Code:532190</p>
          <h4>You can call or chat with us by the numbers given below.</h4>
          <p>7873650995</p>
          <p>9337734276</p>
          <p>7873990995</p>
        </address>
        <hr />
        <address className='adrs'>
          <h2>In Odisha</h2>
          <p>Plot.No 610</p>
          <p>Cuttuk Road</p>
          <p>Infront Of Reliance Fresh</p>
          <p>Bhubaneswar, Odisha</p>
          <p>Pin-Code:752014</p>
          <p>7205070779</p>
          <p>9337734276</p>
          <p>7873990995</p>
        </address>
      </section>
    </div>
  )
}

export default Main
