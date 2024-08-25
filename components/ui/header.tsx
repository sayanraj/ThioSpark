import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import LogoImg from '@/public/images/Picture1.png'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
               <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 C0.90363281 0.16757812 1.80726563 0.33515625 2.73828125 0.5078125 C4.50751953 0.81332031 4.50751953 0.81332031 6.3125 1.125 C7.48425781 1.33382812 8.65601563 1.54265625 9.86328125 1.7578125 C13.16286272 2.33711288 13.16286272 2.33711288 16 0 C18.84120234 0.35515029 21.28047752 1.09349251 24 2 C26.34119555 1.36149212 28.67451993 0.69356423 31 0 C32.32 0 33.64 0 35 0 C35 0.66 35 1.32 35 2 C28.375 5 28.375 5 25 5 C25 5.66 25 6.32 25 7 C25.721875 7.12375 26.44375 7.2475 27.1875 7.375 C29.95721894 7.9904931 32.3970354 8.88444374 35 10 C35 10.66 35 11.32 35 12 C27.35492958 11.09295775 27.35492958 11.09295775 24.375 10.3125 C21.8504399 9.79751585 21.8504399 9.79751585 19 11.0625 C16 12 16 12 13.5625 11 C9.903221 9.57198868 7.65032646 10.8053477 4 12 C2.68 12 1.36 12 0 12 C0 11.34 0 10.68 0 10 C2.97 8.68 5.94 7.36 9 6 C4.545 4.02 4.545 4.02 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C7AD11" transform="translate(0,0)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-6.625 5 -6.625 5 -10 5 C-10 5.66 -10 6.32 -10 7 C-9.278125 7.12375 -8.55625 7.2475 -7.8125 7.375 C-5.04278106 7.9904931 -2.6029646 8.88444374 0 10 C0 10.66 0 11.32 0 12 C-4.71403788 11.52060632 -8.66579301 11.03165952 -13 9 C-13 6.69 -13 4.38 -13 2 C-11.58461283 1.66127487 -10.16762037 1.32925376 -8.75 1 C-7.56664062 0.7215625 -7.56664062 0.7215625 -6.359375 0.4375 C-4 0 -4 0 0 0 Z " fill="#D4B813" transform="translate(35,0)"/>
<path d="M0 0 C1.60463449 0.31008884 3.20869231 0.62316287 4.8125 0.9375 C5.70582031 1.11152344 6.59914063 1.28554688 7.51953125 1.46484375 C10 2 10 2 13 3 C12.67 3.66 12.34 4.32 12 5 C12.66 5.66 13.32 6.32 14 7 C11.33022122 10.45500783 8.13835997 11.05616352 4 12 C2.68 12 1.36 12 0 12 C0 11.34 0 10.68 0 10 C2.97 8.68 5.94 7.36 9 6 C4.545 4.02 4.545 4.02 0 2 C0 1.34 0 0.68 0 0 Z " fill="#B8A111" transform="translate(0,0)"/>
<path d="M0 0 C0.79953138 3.28696233 1.09658936 4.71023192 0 8 C-1.32 8 -2.64 8 -4 8 C-4 7.01 -4 6.02 -4 5 C-5.43750191 3.31201173 -5.43750191 3.31201173 -7 2 C-2.25 0 -2.25 0 0 0 Z " fill="#F4D415" transform="translate(17,2)"/>
<path d="M0 0 C2.97 0.99 5.94 1.98 9 3 C9 3.66 9 4.32 9 5 C7.741875 4.87625 6.48375 4.7525 5.1875 4.625 C4.12595703 4.52058594 4.12595703 4.52058594 3.04296875 4.4140625 C1 4 1 4 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#AA9510" transform="translate(26,7)"/>
<path d="M0 0 C0 0.99 0 1.98 0 3 C-2.64 3.33 -5.28 3.66 -8 4 C-8 3.34 -8 2.68 -8 2 C-5.09399739 0.74335022 -3.20395416 0 0 0 Z " fill="#B49D11" transform="translate(8,8)"/>
<path d="M0 0 C0.66 0 1.32 0 2 0 C2 2.31 2 4.62 2 7 C1.01 7 0.02 7 -1 7 C-1.04254356 5.00045254 -1.04080783 2.99958364 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#F7D715" transform="translate(20,2)"/>
<path d="M0 0 C-1.3125 1.5 -1.3125 1.5 -3 3 C-3.99 3 -4.98 3 -6 3 C-6.33 2.01 -6.66 1.02 -7 0 C-3.98968256 -0.93423645 -3.13349732 -1.04449911 0 0 Z " fill="#CAB012" transform="translate(14,7)"/>
<path d="M0 0 C0 0.66 0 1.32 0 2 C-1.98 2.66 -3.96 3.32 -6 4 C-6 3.34 -6 2.68 -6 2 C-6.66 1.67 -7.32 1.34 -8 1 C-5.10765685 0.17361624 -3.11257569 0 0 0 Z " fill="#9A870F" transform="translate(35,0)"/>
                 </svg> 
             { /*<Image src={LogoImg} className="rounded-md" width={120} height={120} alt='Logo'/>*/}
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
