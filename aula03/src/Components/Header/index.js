function Header(){
    return(
        //JSX HTML COM CSS DENTRO DO JS isso é o JSX


        // no REACT utilizamos class name o que no html seria só class
        // pois no react class é uma palavra reservada
        <header className="">
            <span>GUSTA</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Assistir</a>
                <a href="#">Login</a>
                <a href="#">Configurações</a>
            </nav>
        </header>
    );
}

export default Header;