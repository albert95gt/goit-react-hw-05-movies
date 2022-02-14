import { SEARCH_IMG_URL } from "constance";
import { Section, CastList, CastItem, ActorPoster, DefaultImg, ActorDescr } from "./Cast.styled";
import DefaultImage from '../../images/DefaultImage.jpg';
import { Wrapper } from "components/Wrapper/Wrapper.styled";
import PropTypes from 'prop-types';

export const Cast = ({ cast }) => {
    return (
        <Section>
            <Wrapper>
                <CastList>
                    { cast.map(({ id, profile_path, name, character}) => (
                        <CastItem key={id}>
                            {profile_path ? <ActorPoster src={`${SEARCH_IMG_URL}/${profile_path}`} alt={name} /> : <DefaultImg src={DefaultImage} alt="poster not available"/> }
                            <ActorDescr>
                                <p>Name: {name}</p>
                                {character && <p>Character: {character}</p>}
                            </ActorDescr>
                        </CastItem>
                    ))}
                </CastList>
            </Wrapper>
        </Section>
        
    )
}

Cast.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        character: PropTypes.string.isRequired,
    }).isRequired),
}