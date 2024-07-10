import styles from "./MenuBar.module.css"

export default function MenuBar() {

    const menuItems = ['Overview', 'Curriculum', 'Refund', 'Testimonials']
    const activeLink = 'Overview'

    return (
        <nav className={styles.menuBar}>
            <ul className={styles.menuBarItems}>
                {menuItems.map((item, index) => (
                    <li className={`${styles.menuBarItem} ${activeLink == item && styles.activeMenuBarItem}`} key={index}>
                        <a href="#">{item}</a>
                        {activeLink === item && <div className={styles.activeBar} />}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
