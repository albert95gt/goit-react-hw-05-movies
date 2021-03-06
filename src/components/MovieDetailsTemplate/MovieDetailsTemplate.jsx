import { SEARCH_IMG_URL } from "constance";
import { useLocation } from "react-router-dom";
import { Section, Article,  DescContainer, Img, DefaultImg, MovieTitle, Score, ScoreValue, Overview, OverviewDescr, Genres, GenresDescr, MoreInformation, Link } from "./MovieDetailsTemplate.styled";
import { Wrapper } from "components/Wrapper/Wrapper.styled";
import { BackBtn } from "components/BackBtn/BackBtn";
import DefaultPoster from "../../images/PosterNotAvailable.jpg";
import PropTypes from 'prop-types';

 export const MovieDetailsTemplate = ({movie}) => {
    const location = useLocation();

    const { poster_path, title, release_date, vote_average, overview, genres } = movie;
    const releaseYear = release_date.slice(0, 4);
    const filmGenres = genres.map(data => data.name).join(', ');
    const userScore = vote_average * 10;
    return (
        <Section>
            <Wrapper>
                <BackBtn />
                <Article>
                    {poster_path ? <Img src={`${SEARCH_IMG_URL}${poster_path}`} alt={title} /> : <DefaultImg src={DefaultPoster} alt="poster not available"/>}
                    <DescContainer>
                        <MovieTitle>{title} ({releaseYear})</MovieTitle>
                        <Score>User score<ScoreValue>{`${userScore}%`}</ScoreValue></Score>
                        
                        <Overview>Overview</Overview>
                        <OverviewDescr>{overview}</OverviewDescr>
                        
                        <Genres>Genres</Genres>
                        <GenresDescr>{filmGenres}</GenresDescr>

                    </DescContainer>
                </Article>
                <MoreInformation>Additional information:</MoreInformation>
                <nav>
                    <Link to='cast' state={location.state}>Cast</Link> 
                    <Link to='reviews' state={location.state}>Reviews</Link> 
                </nav>
            </Wrapper>
        </Section>
        
    )
}

MovieDetailsTemplate.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        poster_path: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string.isRequired}).isRequired).isRequired,
    }).isRequired,
}