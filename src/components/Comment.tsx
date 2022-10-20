import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css'
import { CommentProps } from '../contracts/Comment';

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likes, setLikes] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikes((beforeState) => beforeState + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar src='https://github.com/viniciussantos45.png' border={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Gomes</strong>
                            <time title='09 de setembro de 2022' dateTime='2022-11-09'>Cerca de 1 hora atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir • <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}