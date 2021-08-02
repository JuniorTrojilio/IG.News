import styles from './styles.module.scss'
import { SignInButton } from '../SignInButton'

export function Header() {
  return (
    <header className={styles.headercontainer}>
      <div className={styles.headercontent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}