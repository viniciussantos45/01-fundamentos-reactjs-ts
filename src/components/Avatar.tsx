import { AvatarProps } from '../contracts/Avatar';
import styles from './Avatar.module.css';

export function Avatar({ border = true, ...restProps }: AvatarProps) {
    return (
        <img className={border ? styles.avatar : styles.avatarWithoutBorder} {...restProps} />
    )
}