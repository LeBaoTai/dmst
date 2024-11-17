import { IFooterLink } from '@/types/footer/footerLink'
import Link from 'next/link'
import React from 'react'

function FooterLink(link: IFooterLink) {
  return (
    <div>
      <Link href={link.link || '#'}>
        <p className="md:text-sm lg:text-base">{link.ten}</p>
      </Link>
    </div>
  )
}

export default FooterLink
