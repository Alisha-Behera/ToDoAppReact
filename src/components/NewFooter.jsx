import styles from "./footer.module.css"

export default function NewFooter({completedTodos, totalTodos}){
    return(
        <div className={styles.footer}>
    <span className={styles.itme}>completed Todos : {completedTodos}</span>
    <span className={styles.itme}>Total Todos : {totalTodos}</span>
    </div>
    )

}