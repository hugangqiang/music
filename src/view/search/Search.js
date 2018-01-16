import { Link } from 'react-router-dom';
import S from './style.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className={S.header}>
                    <Link to="/">
                        <div className={`${S.box} ${S.active}`}>
                            <i className="icon">&#xe612;</i>
                        </div>
                    </Link>
                    <div>
                        <input className={S.searchInput} type="text"/>
                    </div>
                </div>
                <div className={S.content}>
                    
                </div>
            </div>
        )
    }
}
 
export default Search;