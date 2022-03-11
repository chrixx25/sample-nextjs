import styles from '../styles/Header.module.css';

const Header = () => {
    //const color = 'red'

    return (
        // <div className="">
        //     <style jsx>
        //         {`
        //             .title {
        //                 color: ${color};
        //             }
        //         `}
        //     </style>
        //     <h1 className="title">
        //         <span>Web Dev</span> News
        //     </h1>
        // </div>
        <div className={styles.title}>
            <h1 className={styles.title}>
                <span>Web Dev</span> News
            </h1>
        </div>
    )
}

export default Header