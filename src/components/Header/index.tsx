import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headercontainer}>
      <div className={styles.headercontent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  )
}