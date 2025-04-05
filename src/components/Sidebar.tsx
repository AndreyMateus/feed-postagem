// Importando a Lib de Icons
import { PencilLine } from "@phosphor-icons/react";

// Stles (CSS MODULES)
import styles from "./Sidebar.module.css";

// Components
import Avatar from "./Avatar";

interface SidebarProps {
    urlBackgroundImage: string,
    avatarUrl: string,
    nameUser: string,
    roleUser: string;
}

export default function Sidebar({ urlBackgroundImage, avatarUrl, nameUser, roleUser }: SidebarProps) {
    return (
        <aside className={styles.sidebar}>
            <img
                src={urlBackgroundImage}
                className={styles.cover}
            />
            <div className={styles.profile}>
                <Avatar
                    src={avatarUrl}
                    hasBorder
                />

                <strong>{nameUser}</strong>
                <span>{roleUser}</span>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>

            </div>
        </aside>
    );
}