import css from './Header.module.css';
const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <a>This is header</a>
            </div>
        </div>
    );
};

export {Header};