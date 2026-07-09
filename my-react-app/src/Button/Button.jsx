// import styles from './Button.module.css';
function Button () {
    const styles = {
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer'
    }
    return (<button style={styles}>Click me</button>)
}
export default Button;