// Styles
import styles from "./Avatar.module.css";

// React Intefaces
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string,
    hasBorder?: boolean;
}

export default function Avatar({ hasBorder = false, ...props }: AvatarProps) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            {...props}
        />
    );
}