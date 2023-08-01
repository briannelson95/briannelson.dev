"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [success, setSuccess] = useState(false);

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
  );

  const validate = (e: any) => {
    e.preventDefault()
    if (!validEmail.test(email)) {
      setEmailErr(true)
    } else {
      setEmailErr(false)
      setSuccess(true)
    }

  }

  return (
    <div className='bg-newsletter-white text-newsletter-dark-slate-gray w-full h-full pb-10 md:max-w-3xl md:h-auto md:grid md:grid-cols-2 md:pb-0 md:rounded-3xl'>
      {success ? (
        <div className='mx-6 pt-32 space-y-6 h-full relative'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>
          </div>
          <div className='space-y-6'>
            <h1 className='text-[2.5rem] font-bold leading-10'>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription
            </p>
          </div>
          <button 
            className='w-full absolute bottom-0 bg-newsletter-dark-slate-gray text-newsletter-white p-4 rounded-lg'
            onClick={() => setSuccess(false)}
          >
            Dismiss message  
          </button>
        </div>
      ) : (
        <>
          <div className='md:order-2'>
            <div className='md:hidden w-full'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="375"
                height="284"
                viewBox="0 0 375 284"
              >
                <defs>
                  <linearGradient id="b" x1="100%" x2="0%" y1="21.322%" y2="78.678%">
                    <stop offset="0%" stopColor="#FF6A3A"></stop>
                    <stop offset="100%" stopColor="#FF527B"></stop>
                  </linearGradient>
                  <linearGradient
                    id="h"
                    x1="22.319%"
                    x2="99.127%"
                    y1="28.497%"
                    y2="70.858%"
                  >
                    <stop offset="0%" stopColor="#FF3E83"></stop>
                    <stop offset="100%" stopColor="#FF9F2E"></stop>
                  </linearGradient>
                  <linearGradient id="k" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFB443"></stop>
                    <stop offset="100%" stopColor="#FF5B64" stopOpacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="o" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#F8F8F8"></stop>
                    <stop offset="100%" stopColor="#EEE"></stop>
                  </linearGradient>
                  <linearGradient id="p" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#CACBE8"></stop>
                    <stop offset="100%" stopColor="#EEE"></stop>
                    <stop offset="100%" stopColor="#CACBE8"></stop>
                  </linearGradient>
                  <linearGradient
                    id="r"
                    x1="97.791%"
                    x2="7.729%"
                    y1="26.944%"
                    y2="71.879%"
                  >
                    <stop offset="0%" stopColor="#FF9049"></stop>
                    <stop offset="100%" stopColor="#FF5E5E"></stop>
                  </linearGradient>
                  <linearGradient id="t" x1="50%" x2="50%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6A3D"></stop>
                    <stop offset="100%" stopColor="#FF5B66"></stop>
                  </linearGradient>
                  <path
                    id="a"
                    d="M0 0v268c0 8.837 7.163 16 16 16h343c8.837 0 16-7.163 16-16V0H0z"
                  ></path>
                  <path
                    id="e"
                    d="M0 14.054C0 6.292 6.292 0 14.054 0H220c7.762 0 14.054 6.292 14.054 14.054v128.108c0 7.762-6.292 14.054-14.054 14.054H14.054C6.292 156.216 0 149.924 0 142.162V14.054z"
                  ></path>
                  <path
                    id="g"
                    d="M0 5.946A5.946 5.946 0 015.946 0H210.81a5.946 5.946 0 015.946 5.946v128.108A5.946 5.946 0 01210.81 140H5.946A5.946 5.946 0 010 134.054V5.946z"
                  ></path>
                  <path
                    id="i"
                    d="M0 5.946A5.946 5.946 0 015.946 0H210.81a5.946 5.946 0 015.946 5.946v128.108A5.946 5.946 0 01210.81 140H5.946A5.946 5.946 0 010 134.054V5.946z"
                  ></path>
                  <path
                    id="n"
                    d="M0 5.946A5.946 5.946 0 015.946 0h222.162a5.946 5.946 0 015.946 5.946V129.73a5.946 5.946 0 01-5.946 5.946H5.946A5.946 5.946 0 010 129.73V5.946z"
                  ></path>
                  <path
                    id="q"
                    d="M0 2.162C0 .968.968 0 2.162 0h48.649c1.194 0 2.162.968 2.162 2.162v65.946a2.162 2.162 0 01-2.162 2.162H2.162A2.162 2.162 0 010 68.108V2.162z"
                  ></path>
                  <filter
                    id="d"
                    width="151.3%"
                    height="176.8%"
                    x="-25.6%"
                    y="-23%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    ></feColorMatrix>
                  </filter>
                  <filter
                    id="f"
                    width="155.4%"
                    height="185.7%"
                    x="-27.7%"
                    y="-25.7%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    ></feColorMatrix>
                  </filter>
                  <filter
                    id="j"
                    width="155.4%"
                    height="185.7%"
                    x="-27.7%"
                    y="-25.7%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    ></feColorMatrix>
                  </filter>
                  <filter
                    id="m"
                    width="151.3%"
                    height="188.4%"
                    x="-25.6%"
                    y="-26.5%"
                    filterUnits="objectBoundingBox"
                  >
                    <feOffset
                      dy="24"
                      in="SourceAlpha"
                      result="shadowOffsetOuter1"
                    ></feOffset>
                    <feGaussianBlur
                      in="shadowOffsetOuter1"
                      result="shadowBlurOuter1"
                      stdDeviation="16"
                    ></feGaussianBlur>
                    <feColorMatrix
                      in="shadowBlurOuter1"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.100000001 0"
                    ></feColorMatrix>
                  </filter>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="c" fill="#fff">
                    <use xlinkHref="#a"></use>
                  </mask>
                  <path d="M0 0v268c0 8.837 7.163 16 16 16h343c8.837 0 16-7.163 16-16V0H0z"></path>
                  <path
                    fill="url(#b)"
                    fillRule="nonzero"
                    d="M0 0v268c0 8.837 7.163 16 16 16h343c8.837 0 16-7.163 16-16V0H0z"
                    mask="url(#c)"
                  ></path>
                  <g mask="url(#c)">
                    <g fillRule="nonzero" transform="translate(-16 87.784)">
                      <use fill="#000" filter="url(#d)" xlinkHref="#e"></use>
                      <use fill="#242742" xlinkHref="#e"></use>
                    </g>
                    <g transform="translate(-7.351 95.892)">
                      <g fillRule="nonzero">
                        <use fill="#000" filter="url(#f)" xlinkHref="#g"></use>
                        <use fill="url(#h)" xlinkHref="#g"></use>
                      </g>
                      <mask id="l" fill="#fff">
                        <use xlinkHref="#i"></use>
                      </mask>
                      <g fillRule="nonzero">
                        <use fill="#000" filter="url(#j)" xlinkHref="#i"></use>
                        <use fill="url(#h)" xlinkHref="#i"></use>
                      </g>
                      <circle
                        cx="210.81"
                        cy="131.892"
                        r="85.405"
                        fill="url(#k)"
                        fillRule="nonzero"
                        mask="url(#l)"
                      ></circle>
                      <circle
                        cx="73.754"
                        cy="-18.678"
                        r="85.405"
                        fill="url(#k)"
                        fillRule="nonzero"
                        mask="url(#l)"
                        transform="rotate(-135 73.754 -18.678)"
                      ></circle>
                    </g>
                    <g fillRule="nonzero" transform="translate(157.513 35.892)">
                      <use fill="#000" filter="url(#m)" xlinkHref="#n"></use>
                      <use fill="url(#o)" xlinkHref="#n"></use>
                      <path
                        fill="url(#p)"
                        d="M0 5.946A5.946 5.946 0 015.946 0h45.946v135.676H5.946A5.946 5.946 0 010 129.73V5.946z"
                      ></path>
                      <path
                        fill="#BABBDB"
                        d="M7.568 27.297c0-1.045.847-1.892 1.891-1.892h32.973a1.892 1.892 0 010 3.784H9.46a1.892 1.892 0 01-1.891-1.892zm0 10.811c0-1.045.847-1.892 1.891-1.892h29.19a1.892 1.892 0 010 3.784H9.459a1.892 1.892 0 01-1.891-1.892zm0 10.81c0-1.044.847-1.891 1.891-1.891h32.973a1.892 1.892 0 010 3.784H9.46a1.892 1.892 0 01-1.891-1.892zm0 10.812c0-1.045.847-1.892 1.891-1.892h21.082a1.892 1.892 0 010 3.784H9.459a1.892 1.892 0 01-1.891-1.892z"
                      ></path>
                      <path
                        fill="#242742"
                        d="M0 5.946A5.946 5.946 0 015.946 0h222.162a5.946 5.946 0 015.946 5.946v10.81H0V5.947z"
                      ></path>
                      <g transform="translate(8.649 4.865)">
                        <circle cx="3.514" cy="3.514" r="3.514" fill="#FF6464"></circle>
                        <circle cx="15.406" cy="3.514" r="3.514" fill="#FF9255"></circle>
                        <circle cx="27.297" cy="3.514" r="3.514" fill="#6BD4A8"></circle>
                      </g>
                    </g>
                    <g transform="translate(220.757 24)">
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M0 2.162C0 .968.968 0 2.162 0h48.649c1.194 0 2.162.968 2.162 2.162v65.946a2.162 2.162 0 01-2.162 2.162H2.162A2.162 2.162 0 010 68.108V2.162z"
                      ></path>
                      <mask id="s" fill="#fff">
                        <use xlinkHref="#q"></use>
                      </mask>
                      <use fill="#FFF" fillRule="nonzero" xlinkHref="#q"></use>
                      <path
                        fill="url(#r)"
                        fillRule="nonzero"
                        d="M58.444 15.61a1.62 1.62 0 010 2.293l-13.662 13.67a6.018 6.018 0 01-8.512 0 2.774 2.774 0 00-3.925 0l-9.422 9.429a4.685 4.685 0 01-6.628 0 1.442 1.442 0 00-2.04 0L-3.178 58.444A1.622 1.622 0 11-5.47 56.15l17.43-17.441a4.685 4.685 0 016.629 0 1.442 1.442 0 002.04 0l9.422-9.428a6.018 6.018 0 018.513 0 2.774 2.774 0 003.924 0l13.663-13.67a1.622 1.622 0 012.293-.001z"
                        mask="url(#s)"
                      ></path>
                      <path
                        fill="#FFF"
                        fillRule="nonzero"
                        d="M26.487 81.081c0-1.194.968-2.162 2.162-2.162h64.865c1.194 0 2.162.968 2.162 2.162v77.838a2.162 2.162 0 01-2.162 2.162H28.649a2.162 2.162 0 01-2.162-2.162V81.081z"
                      ></path>
                      <path
                        fill="url(#t)"
                        d="M25.135 42.703c9.702 0 17.568-7.866 17.568-17.568 0-9.702-7.866-17.567-17.568-17.567-9.702 0-17.567 7.865-17.567 17.567s7.865 17.568 17.567 17.568zm0 7.567c13.882 0 25.135-11.253 25.135-25.135C50.27 11.253 39.017 0 25.135 0 11.253 0 0 11.253 0 25.135 0 39.017 11.253 50.27 25.135 50.27z"
                        transform="translate(36.217 94.595)"
                      ></path>
                      <path
                        fill="#242742"
                        fillRule="nonzero"
                        d="M52.222 117.145c0 1.228.318 2.2.954 2.914.637.71 1.504 1.064 2.602 1.064 1.019 0 1.816-.363 2.39-1.09.58-.726.87-1.632.87-2.719h-.634c0 .62-.171 1.112-.515 1.478a1.688 1.688 0 01-1.284.55c-.546 0-.951-.184-1.216-.55-.264-.371-.397-.915-.397-1.63 0-.816.133-1.402.397-1.757.27-.36.67-.54 1.2-.54.568 0 1.01.234 1.326.7.315.468.473 1.304.473 2.51l.076.337c0 1.785-.392 3.052-1.174 3.8-.783.75-1.89 1.121-3.32 1.116h-.38v2.145h.44c2.297-.023 4.05-.645 5.261-1.867 1.216-1.227 1.825-2.88 1.825-4.957v-.44c0-1.869-.42-3.22-1.259-4.054-.839-.839-1.923-1.258-3.252-1.258-1.334 0-2.398.386-3.192 1.157s-1.191 1.802-1.191 3.091zm14.764 8.26h2.61v-12.297h-2.442l-5.464 7.872v1.858h9.265v-2.103h-2.669l-.439.042h-3.514l2.61-4.088h.085v5.186l-.042.296v3.234z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className='hidden md:block z-10 p-4 h-full'>
              <Image
                src='/illustration-sign-up-desktop.png'
                alt=''
                height={1000}
                width={1000}
                priority
              />
            </div>
          </div>
          <div className='m-6 space-y-4 md:order-1 md:my-auto'>
            <h1 className='text-[2.5rem] font-bold'>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div>
              <ul className='space-y-3 md:text-sm'>
                <li className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                  Product discovery and building what matters
                </li>
                <li className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                  Measuring to ensure updates are a success
                </li>
                <li className='flex gap-5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                  And much more!
                </li>
              </ul>
            </div>
            <form>
              <div className='w-full flex justify-between'>
                <label htmlFor='email' className='text-sm font-bold'>Email address</label>
                <p className={`${!emailErr && 'hidden'} text-sm font-bold text-newsletter-tomato`}>Valid email required</p>
              </div>
              <input 
                id='email' 
                type='text' 
                className={`border border-newsletter-gray text-newsletter-gray w-full my-2 mb-6 p-4 rounded-lg ${emailErr && 'bg-newsletter-tomato/20 text-newsletter-tomato border-newsletter-tomato'}`}
                placeholder='email@company.com'
                onChange={(e) => setEmail(e.target.value)}
              />

              <button 
                className='bg-newsletter-dark-slate-gray text-newsletter-white w-full rounded-lg p-4 mb-10 md:mb-0'
                onClick={validate}
              >
                  Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </>
      )}
      
    </div>
  )
}
