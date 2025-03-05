// import Services from '@/app/sections/Services'
import NavServices from './NavServices'
import image1 from '@/assets/1.jpg'
import image2 from '@/assets/2.jpg'
import image3 from '@/assets/8.jpg'
import image4 from '@/assets/9.jpg'
import image5 from '@/assets/6.jpg'
import image6 from '@/assets/6.jpg'

interface NavDropdownProps {
  onClick?: () => void
}
// component for Navbar dropdown

export default function NavDropdown({ onClick }: NavDropdownProps) {
  const items = [
    {
      id: '1',
      text: 'הקמת גינות',
      href: '/שירותים/הקמת-גינות',
      imageUrl: image1.src,
    },
    {
      id: '2',
      text: 'אחזקת גינות',
      href: '/שירותים/אחזקת-גינות',
      imageUrl: image2.src,
    },
    {
      id: '3',
      text: 'גיזום עצים',
      href: '/שירותים/גיזום-עצים',
      imageUrl: image3.src,
    },
    {
      id: '4',
      text: "פרמקלצ'ר",
      href: '/שירותים/פרמקלצר',
      imageUrl: image4.src,
    },
    {
      id: '5',
      text: 'מערכות השקייה',
      href: '/שירותים/מערכות-השקייה',
      imageUrl: image5.src,
    },
    {
      id: '6',
      text: 'עבודות עץ',
      href: '/שירותים/עבודות-עץ',
      imageUrl: image6.src,
    },
  ]
  return (
    <div className="md:w-screen max-w-xl mt-6 md:mt-0">
      {/* <Services sectionHeader={false} /> */}
      <NavServices items={items} defaultImage={image1} onClick={onClick} />
    </div>
  )
}
