import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'
const Footer = () => {
  return (
    <footer className="bg-stone-800 text-white font-sans py-8 hebrew-text">
      <div className="container  ">
        {/* Flexbox Layout for Footer Content */}
        <div className="flex flex-col md:flex-row justify-evenly gap-12 ">
          {/* Logo Section */}
          <div className="flex justify-center items-center md:-ml-8">
            <Link href="/">
              <Logo className="size-36 text-white" />
            </Link>
            <p className="text-3xl bg-p1c1 rounded p-1 px-2">תרבות גן</p>
          </div>
          {/* Navigation Section */}
          <div className="flex flex-col mr-12 md:mr-0">
            <h3 className="text-lg font-semibold mb-4 underline-offset-2 underline">
              ניווט
            </h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/"
                  className="text-stone-400 transition-colors duration-200 hover:text-white "
                >
                  בית
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-stone-400 transition-colors duration-200 hover:text-white"
                >
                  אודות
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-stone-400 transition-colors duration-200 hover:text-white"
                >
                  שירותים
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-stone-400 hover:text-white transition-colors duration-200"
                >
                  בלוג
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col mr-12 md:mr-0">
            <h3 className="text-lg font-semibold mb-4 underline-offset-2 underline ">
              יצירת קשר
            </h3>
            <ul className="space-y-2 ">
              <li className="text-stone-400 transition-colors duration-200">
                אימייל: info@example.com
              </li>
              <li className="text-stone-400 transition-colors duration-200 ">
                טלפון: 123 456 7890+
              </li>
              <li className="text-stone-400 transition-colors duration-200">
                כתובת: רחוב 123, עיר, מדינה
              </li>
            </ul>
          </div>
        </div>

        {/* Socials Section */}
        <div className="mt-8 border-t border-p1c1 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-stone-400 transition-colors duration-200 text-sm">
            &copy; {new Date().getFullYear()} תרבות גן. כל הזכויות שמורות.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/twitter.svg" // Replace with your social icon
                alt="טוויטר"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/facebook.svg" // Replace with your social icon
                alt="פייסבוק"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/instagram.svg" // Replace with your social icon
                alt="אינסטגרם"
                width={24}
                height={24}
                className="hover:opacity-75"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
