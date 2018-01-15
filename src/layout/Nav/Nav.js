import { Link, NavLink } from 'react-router-dom';
import S from './style.scss';

export class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div className={S.header}>
                    <div className={`${S.box} ${S.active}`}>
                        <i className="icon">&#xe620;</i>
                    </div>
                    <div className={S.nav}>
                        <NavLink exact to="/" activeClassName={S.active}>
                            <div className={S.box}>
                                <i className="icon">&#xe621;</i>
                            </div>
                        </NavLink>
                        <NavLink to="/web" activeClassName={S.active}>
                            <div className={S.box}>
                                <i className="icon">&#xe650;</i>
                            </div>
                        </NavLink>
                        <NavLink to="/message" activeClassName={S.active}>
                            <div className={S.box}>
                                <i className="icon">&#xe617;</i>
                            </div>
                        </NavLink>
                    </div>
                    <Link to="/search">
                        <div className={`${S.box} ${S.active}`}>
                            <i className="icon">&#xe615;</i>
                        </div>
                    </Link>
                </div>
                
            </div>
        )
    }
}
 
export default Nav;