import { useState } from 'react'

import useHeader from './Header.hook'

import { Button, Logo, BarsIcon, TimesIcon } from '@/components/ui'
import NavbarItems from './HeaderNavItems'
import MobileMenu from './HeaderMobileMenu'

const Header = ({ i18n }: { i18n: string[] }) => {
  const { visible } = useHeader()
  const [isOpen, setOpen] = useState(false)

  return (
    <header className={`flex fixed top-0 items-center bg-transparent h-20 justify-between w-full z-50 transform transition-transform duration-250 tablet:h-[70px] ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-full mx-auto flex items-center justify-between p-4">
        <nav className="flex items-center justify-between tablet:p-12 relative top-0 z-50 w-full">
          <Logo />
          <NavbarItems i18n={i18n} />
          <Button
            variant="outlined"
            className="h-9 tablet:hidden"
            onClick={() => { setOpen(prev => !prev) }}
          >
            { !isOpen
              ? <BarsIcon width={20} />
              : <TimesIcon width={20} />
            }
          </Button>
        </nav>
      </div>
      <MobileMenu
        i18n={i18n}
        isOpen={isOpen}
        handleMenuOpen={() => { setOpen(prev => !prev) }}
      />
    </header>
  )
}

export default Header
