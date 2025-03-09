import React from 'react';
import logoIcon from '../assets/logo.svg';
import icon1 from '../assets/icon1.svg';
import crossIcon from '../assets/crossIcon.svg';
import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'
export default function Section1() {
  return (
    <div
      className='h-[1001px] w-[1440px] bg-gradient-to-b from-[#00CAB2] to-[#00554A]'
    >
      <div className='h-[1001.03px] w-[1200px]'>
        {/* Navigation Bar */}
        <div className='h-[95px] w-full bg-[var(--color-cyan-3549,#00B49F7D)]'>
          <div className='h-full w-full flex items-center px-[20px]'>
            {/* Logo Section */}
            <div className='w-[402.44px] flex justify-center items-center'>
              <img className='h-[59px] w-[59px]' src={logoIcon} alt='Logo' />
            </div>

            {/* Navigation Section */}
            <div className='w-[777.56px] flex justify-center items-center'>
              <div className='flex gap-6'>
                <button className='nav-btn'>Home</button>
                <button className='nav-btn'>Feature</button>
                <button className='nav-btn'>Blog</button>
              </div>
            </div>

            {/* Button Section */}
            <div className='w-[429.11px] flex justify-center items-center gap-5'>
              <button className='download-btn font-secondary'>
                Download App
              </button>

              <button className='add-to-chrome-btn'>
                Add to Chrome
              </button>

              <button className='avtar-icon'>
                <img src={icon1} alt='Avatar Icon' />
              </button>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          className='h-[118px] w-[1038px] relative top-[119px] left-[81px] bg-[#FFFFFF] rounded-[10px] flex items-center p-[20px] gap-[20px]'
          style={{
            boxShadow:
              'var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-200)',
          }}
        >
          <div
            className='absolute top-[10px] right-[10px] cursor-pointer text-[#000000] text-[16px] font-bold'
          >
            <img src={crossIcon} alt='Close Icon' />
          </div>

          <div>
            <div
              className='text-[24px] mt-[-40px] pt-[28px] leading-[28.8px] font-[600] tracking-[0%] font-sans text-[#000000]'
            >
              Enable iGrammar Chrome extension wherever you type
            </div>

            <div
              className='w-[460px] h-[45px] text-[13px] leading-[15px] font-[400] tracking-[0%] text-[#000000] mt-[8px]'
            >
              Use it on Gmail, Facebook, Twitter, <span>Linkedin</span>,
              <span> Slack</span>, and thousands of other websites.
            </div>
          </div>

          <button
            id='add-to-chrome-btn'
            className='w-[170px] h-[47px] rounded-[6px] bg-[#019987] text-white text-[14px] font-[500] ml-auto mr-[36px]'
          >
            Add To Chrome
          </button>
        </div>
        <div className='h-[761.03px] w-[670.28px] top-[193px] pt-[72px]'>
        <div className='h-[352px] w-[670.28px] flex justify-center items-center'>
  <div
    className='w-[670.28px] h-[320px] pt-[72px] flex justify-center items-center text-left'
    style={{
      fontFamily: 'sans-serif',
      fontWeight: 600,
      fontSize: '80px',
      lineHeight: '80px',
      letterSpacing: '0%',
      verticalAlign: 'middle'
    }}
  >
    Perfect Your<br />
    Grammar<br />
    Anywhere,<br />
    Anytime
  </div>
</div>

        </div>
        <div className='h-[426px] w-[530px] relative top-[-626px] left-[780px]'>
          <div className='h-[401px] w-[507px]'>
            <img  className='h-[310px] w-[471px] rounded-[10px]' src={img1}></img>
            <img className='w-[271px] h-[279px] relative top-[-204px] left-[170px] rounded-[5px]' src={img2}></img>
            <img className='w-[159px] h-[131px] relative top-[-388px] left-[348px]' src={img3}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
