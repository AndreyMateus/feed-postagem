// Styles (css modules)
import styles from "./Post.module.css";

// Components
import Avatar from "./Avatar";
import { Comment } from "./Comment";

// Lib de manipulação de Data e Tempo.
import { format, formatDistanceToNow } from "date-fns";
// Importando o SUPORTE ao TEXTO em Português na data.
import { ptBR } from 'date-fns/locale/pt-BR';

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Comment {
	avatarUrl: string,
	content: string;
}

interface ContentCommentPost {
	type: string,
	content: string;
}

interface PostProps {
	avatar: string,
	author: string,
	titlePost: string,
	subtitle: string,
	publishedAt: Date,
	content: ContentCommentPost[],
	comments: Comment[];
}

export default function Post({ avatar, author, subtitle, titlePost, content, publishedAt, comments }: PostProps) {

	const [userComments, setUserComments] = useState(comments);

	const [newCommentText, setNewCommentText] = useState('');

	const isNewCommentEmpty = newCommentText.length <= 0 ? true : false;

	const publishedAtDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm 'h'", {
		locale: ptBR
	});

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	});

	function handleCreateNewComment(e: FormEvent) {
		e.preventDefault();
		setUserComments(comments => {
			return [...comments, {
				avatarUrl: `https://github.com/random${Math.round(Math.random())}.png`,
				content: `${newCommentText}`
			}];
		});

		setNewCommentText('');
	}

	function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity('');

		setNewCommentText(e.target.value);
	}

	function handleInvalidText(e: InvalidEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity("Esse Campo é obrigatório!");
	}

	function deleteComment(avatarUrlToDeleteComment: string): void {
		const commentsWithoutDeletedone = userComments.filter(comment => {
			return comment.avatarUrl !== avatarUrlToDeleteComment;
		});

		setUserComments(commentsWithoutDeletedone);
	};

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.wrapperPostProfile} >
					<div className={styles.subContainerwrapperPostProfile}>
						<Avatar
							src={avatar}
							hasBorder
						/>
						<div className={styles.subcontainerPostProfile}>
							<strong>{author}</strong>
							<span>{subtitle}</span>
						</div>
					</div>

					<div>
						<time title={publishedAtDateFormatted}
							dateTime={publishedAt.toISOString()}
							className={styles.time}>
							{`${publishedDateRelativeToNow}`}
						</time>
					</div>
				</div>
			</header>

			<div className={styles.mainContainer}>
				<div className={styles.wrapperContentPost}>
					<p>{titlePost}</p>
					<br />
					{content.map(line => {
						if (line.type === 'paragraph') {
							return (
								<p key={line.content}>{line.content}</p>
							);
						} else if (line.type === 'link') {
							return (

								<p key={line.content}>
									<a href={line.content}
										target="_blank"
										className={styles.link}>{line.content}	</a>
								</p>

							);
						}
					})}
				</div>
			</div>

			<form
				onSubmit={handleCreateNewComment}
				className={styles.commentForm}
			>
				<strong>Deixe seu Feedback</strong>
				<textarea
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
					onInvalid={handleInvalidText}
					required
				/>
				<footer>
					<button type="submit"
						disabled={isNewCommentEmpty}>
						Publicar
					</button>
				</footer>
			</form>

			{userComments.map(userComment => {
				return (
					<Comment
						key={userComment.content}
						avatarUrl={userComment.avatarUrl}
						contentComment={userComment.content}
						deleteComment={deleteComment}
					/>
				);
			})}

		</article>
	);
}