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
                        <div className={`${S.box} ${S.active}`}>
                            <i className="icon">&#xe621;</i>
                        </div>
                        <div className={`${S.box}`}>
                            <i className="icon">&#xe650;</i>
                        </div>
                        <div className={`${S.box}`}>
                            <i className="icon">&#xe617;</i>
                        </div>
                    </div>
                    <div className={`${S.box} ${S.active}`}>
                        <i className="icon">&#xe615;</i>
                    </div>
                </div>
                
            </div>
        )
    }
}
 
export default Nav;