import styles from './Projects.module.css'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'

function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <h1 className={styles.title_container}>Meus projetos</h1>
            {message && <Message type='success' msg={message} /> }  
        </div>
    )
}

export default Projects