// Styles
import styles from "./Comment.module.css";

// Components
import Avatar from "./Avatar";

// Lib Icons
import { ThumbsUp, Trash } from "@phosphor-icons/react";

// Hooks
import { useState } from "react";

// Lib de manipulação de Data e Tempo.
import { formatDistanceToNow } from "date-fns";
// Importando o SUPORTE ao TEXTO em Português na data.
import { ptBR } from 'date-fns/locale/pt-BR';

interface CommentProps {
    avatarUrl: string,
    contentComment: string,
    deleteComment: (avatarUrl: string) => void;
}

export function Comment({ avatarUrl, contentComment, deleteComment }: CommentProps) {
    const [likeCounter, setLikeCounter] = useState(0);

    const publishedDateRelativeToNow = formatDistanceToNow(new Date(), {
        locale: ptBR,
        addSuffix: true
    });

    function handleDeleteComment() {
        deleteComment(avatarUrl);
    }

    function handleLikeCounter() {
        likeComment();
    }

    function likeComment() {
        setLikeCounter(counter => counter + 1);
    }

    return (
        <div className={styles.comment}>
            <div>
                <Avatar
                    src={avatarUrl}
                />
            </div>

            <div>
                <div className={styles.wrapperComment}>
                    <header className={styles.wrapperTitleComment}>
                        <div className={styles.wrapperCommentProfile}>
                            <strong>UserGuest</strong>
                            <p>{publishedDateRelativeToNow}</p>
                        </div>

                        <button
                            className={styles.trashIcon} title="deletar um comentário"
                            onClick={handleDeleteComment}
                        >
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{contentComment}</p>
                </div>

                <div className={styles.wrapperLike}
                    onClick={handleLikeCounter}
                >
                    <ThumbsUp />
                    <p>Aplaudir °</p>
                    <p>{likeCounter}</p>
                </div>
            </div>
        </div>
    );
}