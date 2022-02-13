import { Link, useLocation } from "react-router-dom";
import { SEARCH_IMG_URL } from "constance";
import { HomePageTitle, Section, FilmList, FilmItem, FilmItemImg, DefaultImg, FilmItemTitle } from "./HomePageTemplate.styled";
import { Wrapper } from "components/Wrapper";
import DefaultPoster from "../../images/PosterNotAvailable.jpg";

export const HomePageTemplate = ({ films }) => {
    const location = useLocation();
    return (
        <Section>
            <Wrapper>
                <HomePageTitle>Trending today:</HomePageTitle>
                <FilmList>
                {films.map(({ id, title, poster_path })=> (
                    <FilmItem key={id}>
                        <Link to={`movies/${id}`} state={{from: location}}>
                            {poster_path ? <FilmItemImg src={`${SEARCH_IMG_URL}/${poster_path}`} alt={title} /> : <DefaultImg src={DefaultPoster} alt="poster not available"/>}
                            
                            <FilmItemTitle>{title}</FilmItemTitle>
                        </Link>
                    </FilmItem>
                ))}
                </FilmList>
            </Wrapper>
        </Section>
        
    )
}