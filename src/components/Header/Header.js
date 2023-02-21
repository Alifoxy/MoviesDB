import css from './Header.module.css';
const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <h3>This is header</h3>
            </div>
        </div>
    );
};

export {Header};