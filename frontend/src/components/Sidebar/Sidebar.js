
import { Link } from 'react-router-dom';
import { useSidebar } from '../../context/SideBarContext.js';




const Sidebar = () => {
    const { setPageType } = useSidebar();


    const handleClick = (event, type) => {
        event.preventDefault();
        setPageType(type);
    }


    return (
    <section id='sidebar'>
        <div className='inner'>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={event => handleClick(event, 'about')} >Welcome</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={event => handleClick(event, 'projects')} >Projects</Link>
                    </li>
                    <li>
                        <Link to="/" onClick={event => handleClick(event, 'skills')} >Skills</Link>
                    </li>
                    <li>
                        <Link to="/resume" >Resume</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
    )
}


export default Sidebar;
