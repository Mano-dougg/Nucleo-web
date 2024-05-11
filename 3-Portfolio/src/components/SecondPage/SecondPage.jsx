import s from "./SecondPage.module.css"
import ProjectDescription from "../ProjectDescription/ProjectDescription"

export default function SecondPage() {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Title</h2>
            <p className={s.description}>
                Line of copy in here to decribe this section. 
                Line of copy in here to decribe this section. 
                Line of copy in here to decribe this section. 
                Line of copy in here to decribe this section. 
            </p>
            <ProjectDescription reverse={true} />

            <ProjectDescription />
        </div>
    )
}