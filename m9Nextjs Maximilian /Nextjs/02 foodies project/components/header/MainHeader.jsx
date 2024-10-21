// components/MainHeader.jsx
import React from 'react'
import Link from 'next/link'
import logo from '@/assets/logo.png' // an object
import styles from '@/components/header/MainHeader.module.css' 
import Image from 'next/image'

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo}href='/'>   {/* Home Page */}
      <Image src={logo} alt='logo' priority></Image>
      TERI MKC APP
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li><Link href='/meals/share'>Share Meals</Link></li>
          <li><Link href='/community'>Community </Link></li>
        </ul>
      </nav>
    </header>

  )
}

export default MainHeader