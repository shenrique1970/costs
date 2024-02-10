import styles from './NewProjet.module.css'
import ProjectForm from '../project/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois acicionar os serviços.</p>
            <ProjectForm btnText="Criar projeto" />
        </div>
    )
}

export default NewProject