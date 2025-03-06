import Link from 'next/link'
import Logo from '@/assets/Logo.svg'
import Socials from '@/components/Socials'
const Footer = () => {
  interface NavLinks {
    href: string
    linkText: string
  }
  const navLinks: NavLinks[] = [
    {
      href: '/',
      linkText: 'בית',
    },

    {
      href: '/שירותים',
      linkText: 'שירותים',
    },
    {
      href: '/אודות',
      linkText: 'אודות',
    },
    {
      href: '/כתבות',
      linkText: 'כתבות גננות',
    },

    {
      href: '/צור-קשר',
      linkText: 'צור קשר',
    },
  ]
  return (
    <footer className="bg-stone-800 text-white font-sans pt-8" dir="rtl">
      <div className="container">
        {/* Flexbox Layout for Footer Content */}
        <div className="flex flex-col md:flex-row justify-evenly gap-12 ">
          {/* Logo Section */}
          <div className="flex justify-center items-center md:-ml-8">
            <Logo className="size-36 text-white" />
            <p className="text-3xl bg-p1c1 rounded p-1 px-2">תרבות גן</p>
          </div>
          {/* Navigation Section */}
          <div className="flex flex-col mr-12 md:mr-0">
            <h3 className="text-lg font-semibold mb-4 p-1 ">ניווט</h3>
            <span className="min-w-16 md:min-w-20 absolute mt-10 rounded h-0.5 bg-white/20"></span>
            <ul className="">
              <nav>
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block p-1 py-2 lg:py-1  text-stone-400 transition-colors duration-200  hover:text-white"
                  >
                    {link.linkText}
                  </Link>
                ))}
              </nav>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col mr-12 md:mr-0">
            <h3 className="block p-1 text-lg font-semibold mb-4">יצירת קשר</h3>
            <span className="min-w-24 md:min-w-28 absolute mt-10 rounded h-0.5 bg-white/20"></span>

            <ul className="">
              <li className="block p-1 text-stone-400 transition-colors duration-200 py-2 lg:py-1">
                אימייל: info@example.com
              </li>
              <li className="block p-1 text-stone-400 transition-colors duration-200 py-2 lg:py-1">
                טלפון: 123 456 7890+
              </li>
              <li className="block p-1 text-stone-400 transition-colors duration-200 py-2 lg:py-1">
                כתובת: רחוב 123, עיר, מדינה
              </li>
            </ul>
          </div>
        </div>

        {/* Socials Section */}
        <div className="mt-8 border-t border-p1c1 pt-8 flex flex-col-reverse md:flex-row justify-between items-center md:mb-6">
          <div className="text-stone-400 transition-colors duration-200 text-sm md:mr-20 mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} תרבות גן. כל הזכויות שמורות.
          </div>
          <div className="md:ml-20 mt-2">
            <Socials />
          </div>
        </div>
      </div>
      <div className="h-4 w-full bg-p1c1  bg-gradient-to-b from-stone-800 to-p1c1"></div>
    </footer>
  )
}

export default Footer
