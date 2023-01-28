import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev </span> News
            </h1>
            <p className={headerStyles.desciption}> Follow us for more news</p>
        </div>
    )
}

export default Header
