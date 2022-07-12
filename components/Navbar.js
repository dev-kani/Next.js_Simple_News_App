import { useRouter } from 'next/router'
import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  const router = useRouter()

  return (
    <div className={styles.main}>
      <div onClick={() => router.push('/')}>Home</div>
      <div onClick={() => router.push('/feed/1')}>Feed</div>
      <div onClick={() => router.push('/eom')}>EOM</div>
      <div
        onClick={() => (window.open('https://twitter.com/kani_euro'), '_blank')}>Twitter
      </div>
    </div>
  )
}