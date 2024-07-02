import styles from './Header.module.css';


function header(){
    return(
        <header className={styles.header}>
               <span>GUSTA</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
                <a href="#">Login</a>
                <a href="#">Configurações</a>
                <a href="#">Novidades</a>
            </nav>
        </header>
    );
}
export default header;