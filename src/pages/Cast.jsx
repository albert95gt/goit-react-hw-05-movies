import { DefaultImage } from "components/DefaultImage/DefaultImage";
import { SEARCH_IMG_URL } from "constance";

export const Cast = ({cast}) => {
    return (
        <ul>
            { cast.map(({ id, profile_path, name, character}) => (
                <li key={id}>
                {profile_path ? <img src={`${SEARCH_IMG_URL}/${profile_path}`} alt={name} /> : <DefaultImage/>}
                <p>Name: {name}</p>
                <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    )
}
